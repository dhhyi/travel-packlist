import { computed, effect, inject, signal, Signal } from '@angular/core';
import { Item, Refactor, VariableType } from '@travel-packlist/model';

import {
  createLocalStorageSignalState,
  createSessionStorageSignalState,
} from '../persistence/storage-signal';
import { ConfigState } from './config-state';
import { RulesParsingState } from './rules-parsing-state';
import { RulesSourceState } from './rules-source-state';

const create = createLocalStorageSignalState;

function generateCategoryId(input: string): string {
  return (
    'cat-' +
    input
      .trim()
      .toLowerCase()
      .replace(/[^\w]+/g, '_')
      .replace(/__+$/, '_')
      .replace(/^_+/, '')
      .replace(/_+$/, '')
  );
}

export type ItemStats = 'distribution' | 'heaviestItems';

class PacklistItem extends Item {
  constructor(
    readonly original: Item,
    public readonly checked: boolean,
    public readonly skipped: boolean,
    public readonly colored: boolean,
  ) {
    super(original.category, original.name, original.weight);
  }
}

export const packlistState = ({
  rules: { parsed: parsedRules, raw },
  config: { categorySorting, skipItems },
}: RulesParsingState & ConfigState & RulesSourceState) => {
  const answers = create<Record<string, VariableType>>('answers', {});
  const stringCheckedItems = create<string[]>('checkedItems', []);
  const stringSkippedItems = create<string[]>('skippedItems', []);
  const collapsedCategories = create<string[]>('collapsedCategories', []);
  const answersLocked = create('answersLocked', false);
  const statsVisible = createSessionStorageSignalState<ItemStats | undefined>(
    'statsVisible',
    undefined,
  );
  const askedWeightTracking = createSessionStorageSignalState<
    'activation' | 'deactivation' | undefined
  >('askedWeightTracking', undefined);

  const refactor = inject(Refactor);
  const active = computed(() =>
    refactor.filterActive({
      rules: parsedRules.value(),
      model: answers(),
    }),
  );
  const activeRules = computed(() => active().rules);

  const items = computed(() => activeRules().flatMap((rule) => rule.items));

  const checkedItems = computed(() =>
    items().filter((item) => stringCheckedItems().includes(item.id())),
  );
  const toggleCheckedItem = (item: Item) => {
    if (stringCheckedItems().includes(item.id())) {
      stringCheckedItems.update((old) => old.filter((i) => i !== item.id()));
    } else {
      stringCheckedItems.update((old) => [...old, item.id()]);
    }
  };
  const skippedItems = computed(() =>
    items().filter((item) => stringSkippedItems().includes(item.id())),
  );
  const toggleSkippedItem = (item: Item) => {
    if (!skipItems()) {
      return;
    }
    if (stringSkippedItems().includes(item.id())) {
      stringSkippedItems.update((old) => old.filter((i) => i !== item.id()));
    } else {
      stringSkippedItems.update((old) => [...old, item.id()]);
    }
  };

  const toggleCategoryCollapse = (category: string) => {
    if (collapsedCategories().includes(category)) {
      collapsedCategories.update((old) => old.filter((c) => c !== category));
    } else {
      collapsedCategories.update((old) => [...old, category]);
    }
  };

  const coloredItems = signal<string[]>([]);
  const colorItems = (ids: string[]) => {
    // equality check to prevent recursive updates
    if (
      coloredItems().length !== ids.length ||
      !ids.every((id) => coloredItems().includes(id))
    ) {
      coloredItems.set(ids);
    }
  };

  const model = computed(() => {
    function initialize(item: Pick<Item, 'category'>) {
      const id = generateCategoryId(item.category);
      return {
        id,
        name: item.category,
        items: [] as PacklistItem[],
        totalItems: 0,
        checkedItems: 0,
        totalWeight: 0,
        checkedWeight: 0,
        collapsed: collapsedCategories().includes(item.category),
        colored: statsVisible() === 'distribution',
      };
    }
    type Category = ReturnType<typeof initialize>;
    const unorderedCategories = items().reduce<Record<string, Category>>(
      (groups, item) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!groups[item.category]) {
          groups[item.category] = initialize(item);
        }
        const skipped = skipItems() && skippedItems().includes(item);
        const checked = !skipped && checkedItems().includes(item);
        const colored =
          statsVisible() === 'heaviestItems' &&
          coloredItems().includes(item.id());
        groups[item.category].items.push(
          new PacklistItem(item, checked, skipped, colored),
        );
        if (checked) {
          groups[item.category].checkedItems++;
          groups[item.category].checkedWeight += item.weight ?? 0;
        }
        if (!skipped) {
          groups[item.category].totalItems++;
          groups[item.category].totalWeight += item.weight ?? 0;
        }
        return groups;
      },
      {},
    );

    const categoriesOrderBy: Signal<
      (left: Category, right: Category) => number
    > = computed(() => {
      const sorting = categorySorting();
      return sorting === 'alphabetically'
        ? (left, right) => left.name.localeCompare(right.name)
        : sorting === 'weight'
          ? (left, right) => right.totalWeight - left.totalWeight
          : () => 0;
    });

    const sorter = categoriesOrderBy();

    return Object.entries(unorderedCategories)
      .map((e) => e[1])
      .toSorted((l, r) => sorter(l, r));
  });

  const stats = computed(() =>
    Object.entries(model()).reduce(
      (acc, [, category]) => {
        acc.totalItems += category.totalItems;
        acc.checkedItems += category.checkedItems;
        acc.totalWeight += category.totalWeight;
        acc.checkedWeight += category.checkedWeight;
        return acc;
      },
      { totalItems: 0, checkedItems: 0, totalWeight: 0, checkedWeight: 0 },
    ),
  );

  effect(() => {
    if (raw.hasValue() && raw.value()) {
      // reset packlist view modifications on rules change
      answersLocked.set(false);
      statsVisible.set(undefined);
    }
  });

  return {
    rules: {
      /** derived: all categories extracted from parsed rules */
      categories: computed(() =>
        refactor.extractCategories(parsedRules.value()),
      ),
      /** derived: all variables extracted from parsed rules */
      variables: computed(() => refactor.extractVariables(parsedRules.value())),
    },
    active: {
      /** derived: currently active rules */
      rules: activeRules,
      /** derived: currently active answers */
      answers: computed(() => active().model),
      /** derived: currently active questions */
      questions: computed(() =>
        activeRules().flatMap((rule) => rule.questions),
      ),
    },
    packlist: {
      /** storage: the answers from checked questions in the packlist */
      answers,
      /** derived: display model for the packlist */
      model,
      /** derived: stats for the packlist */
      stats,
      /** toggle the checked state of an item */
      toggleCheckedItem,
      /** toggle the skipped state of an item */
      toggleSkippedItem,
      /** activate color for items */
      colorItems,
      /** toggle the collapsed state of a category */
      toggleCategoryCollapse,
      /** storage: whether to lock the answers in the packlist */
      answersLocked,
      /** session: which stats to show */
      statsVisible,
      /** storage: if already asked for weight tracking */
      askedWeightTracking,
      /** reset the packlist sub state */
      reset: () => {
        answers.set({});
        stringCheckedItems.set([]);
        stringSkippedItems.set([]);
        collapsedCategories.set([]);
        answersLocked.set(false);
        statsVisible.set(undefined);
      },
    },
  };
};
