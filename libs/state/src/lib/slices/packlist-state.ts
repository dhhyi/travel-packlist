import { computed, inject, Signal } from '@angular/core';
import { Item, Refactor, VariableType } from '@travel-packlist/model';

import {
  createLocalStorageSignalState,
  createSessionStorageSignalState,
} from '../persistence/storage-signal';
import { ConfigState } from './config-state';
import { RuleParsing } from './rule-parsing';

const create = createLocalStorageSignalState;

function serialize(item: Pick<Item, 'category' | 'name'>): string {
  return `${item.category}-${item.name}`;
}

export const packlistState = ({
  rules: { parsed: parsedRules },
  config: { categorySorting, skipItems },
}: RuleParsing & ConfigState) => {
  const answers = create<Record<string, VariableType>>('answers', {});
  const stringCheckedItems = create<string[]>('checkedItems', []);
  const stringSkippedItems = create<string[]>('skippedItems', []);
  const collapsedCategories = create<string[]>('collapsedCategories', []);
  const answersLocked = create('answersLocked', false);
  const weightStatsVisible = createSessionStorageSignalState(
    'weightStatsVisible',
    false,
  );

  const refactor = inject(Refactor);
  const active = computed(() =>
    refactor.filterActive({
      rules: parsedRules(),
      model: answers(),
    }),
  );
  const activeRules = computed(() => active().rules);

  const items = computed(() => activeRules().flatMap((rule) => rule.items));

  const checkedItems = computed(() =>
    items().filter((item) => stringCheckedItems().includes(serialize(item))),
  );
  const toggleCheckedItem = (item: Item) => {
    if (stringCheckedItems().includes(serialize(item))) {
      stringCheckedItems.update((old) =>
        old.filter((i) => i !== serialize(item)),
      );
    } else {
      stringCheckedItems.update((old) => [...old, serialize(item)]);
    }
  };
  const skippedItems = computed(() =>
    items().filter((item) => stringSkippedItems().includes(serialize(item))),
  );
  const toggleSkippedItem = (item: Item) => {
    if (!skipItems()) {
      return;
    }
    if (stringSkippedItems().includes(serialize(item))) {
      stringSkippedItems.update((old) =>
        old.filter((i) => i !== serialize(item)),
      );
    } else {
      stringSkippedItems.update((old) => [...old, serialize(item)]);
    }
  };

  const toggleCategoryCollapse = (category: string) => {
    if (collapsedCategories().includes(category)) {
      collapsedCategories.update((old) => old.filter((c) => c !== category));
    } else {
      collapsedCategories.update((old) => [...old, category]);
    }
  };

  function isCategoryCollapsed(category: string): boolean {
    return collapsedCategories().includes(category);
  }

  const categoriesOrderBy: Signal<(left: string, right: string) => number> =
    computed(() => {
      const sorting = categorySorting();
      return sorting === 'definition'
        ? () => 0
        : (left, right) => left.localeCompare(right);
    });

  const model = computed(() => {
    function initialize(item: Pick<Item, 'category'>) {
      return {
        name: item.category,
        items: [] as (Item & { checked: boolean; skipped: boolean })[],
        totalItems: 0,
        checkedItems: 0,
        totalWeight: 0,
        checkedWeight: 0,
        collapsed: isCategoryCollapsed(item.category),
      };
    }
    const unorderedCategories = items().reduce<
      Record<string, ReturnType<typeof initialize>>
    >((groups, item) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!groups[item.category]) {
        groups[item.category] = initialize(item);
      }
      const skipped = skipItems() && skippedItems().includes(item);
      const checked = !skipped && checkedItems().includes(item);
      groups[item.category].items.push({
        category: item.category,
        name: item.name,
        weight: item.weight,
        checked,
        skipped,
      });
      if (checked) {
        groups[item.category].checkedItems++;
        groups[item.category].checkedWeight += item.weight ?? 0;
      }
      if (!skipped) {
        groups[item.category].totalItems++;
        groups[item.category].totalWeight += item.weight ?? 0;
      }
      return groups;
    }, {});

    const sorter = categoriesOrderBy();

    return Object.entries(unorderedCategories)
      .map((e) => e[1])
      .toSorted((l, r) => sorter(l.name, r.name));
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

  return {
    rules: {
      /** derived: all categories extracted from parsed rules */
      categories: computed(() => refactor.extractCategories(parsedRules())),
      /** derived: all variables extracted from parsed rules */
      variables: computed(() => refactor.extractVariables(parsedRules())),
      /** derived: currently active rules */
    },
    active: {
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
      /** toggle the collapsed state of a category */
      toggleCategoryCollapse,
      /** storage: whether to lock the answers in the packlist */
      answersLocked,
      /** session: whether to show the weight stats */
      weightStatsVisible,
      /** reset the packlist sub state */
      reset: () => {
        answers.set({});
        stringCheckedItems.set([]);
        stringSkippedItems.set([]);
        collapsedCategories.set([]);
        answersLocked.set(false);
        weightStatsVisible.set(false);
      },
    },
  };
};
