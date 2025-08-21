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
    public readonly visible: boolean,
  ) {
    super(original.category, original.name, original.weight);
  }
}

interface SessionState {
  sessionName?: string;
  answers: Record<string, VariableType>;
  checkedItems: string[];
  skippedItems: string[];
  collapsedCategories: string[];
  answersLocked: boolean;
  hideCompleted: boolean;
  statsVisible: ItemStats | undefined;
  createdAt: number;
  modifiedAt: number;
}

export type SavedSession = Pick<SessionState, 'sessionName' | 'modifiedAt'> & {
  index: number;
};

function createNewSession(): SessionState {
  return {
    answers: {},
    checkedItems: [],
    skippedItems: [],
    collapsedCategories: [],
    answersLocked: false,
    hideCompleted: false,
    statsVisible: undefined,
    createdAt: Date.now(),
    modifiedAt: Date.now(),
  };
}

export const packlistState = ({
  rules: { parsed: parsedRules, raw },
  config: { categorySorting, skipItems },
}: RulesParsingState & ConfigState & RulesSourceState) => {
  const sessions = create<(SessionState | undefined)[]>('packlistSessions', [
    createNewSession(),
    undefined,
    undefined,
    undefined,
  ]);
  const currentSlot = create<number>('currentPacklistSessionIndex', 0);
  const session = computed(
    () => sessions()[currentSlot()] ?? createNewSession(),
  );

  function updateSession(transform: (old: SessionState) => SessionState) {
    sessions.update((oldSessions) => {
      const newSession = transform(
        oldSessions[currentSlot()] ?? createNewSession(),
      );
      return oldSessions.map((s, i) => (i === currentSlot() ? newSession : s));
    });
  }

  function setSessionName(name: string | undefined) {
    updateSession((old) => ({
      ...old,
      sessionName: name,
      modifiedAt: Date.now(),
    }));
  }

  function updateAnswer(id: string, value: VariableType) {
    updateSession((old) => ({
      ...old,
      answers: { ...old.answers, [id]: value },
      modifiedAt: Date.now(),
    }));
  }

  function toggleAnswersLock() {
    updateSession((old) => ({
      ...old,
      answersLocked: !old.answersLocked,
      modifiedAt: Date.now(),
    }));
  }

  function toggleHideCompleted() {
    updateSession((old) => ({
      ...old,
      hideCompleted: !old.hideCompleted,
      modifiedAt: Date.now(),
    }));
  }

  function setStatsVisible(value: SessionState['statsVisible']) {
    updateSession((old) => ({
      ...old,
      statsVisible: value,
      modifiedAt: Date.now(),
    }));
  }

  const askedWeightTracking = createSessionStorageSignalState<
    'activation' | 'deactivation' | undefined
  >('askedWeightTracking', undefined);

  const refactor = inject(Refactor);
  const active = computed(() =>
    refactor.filterActive({
      rules: parsedRules.value(),
      model: session().answers,
    }),
  );
  const activeRules = computed(() => active().rules);

  const items = computed(() => activeRules().flatMap((rule) => rule.items));

  const checkedItems = computed(() =>
    items().filter((item) => session().checkedItems.includes(item.id())),
  );
  function toggleCheckedItem(item: Item) {
    if (session().checkedItems.includes(item.id())) {
      updateSession((old) => ({
        ...old,
        checkedItems: old.checkedItems.filter((i) => i !== item.id()),
        modifiedAt: Date.now(),
      }));
    } else {
      updateSession((old) => ({
        ...old,
        checkedItems: [...old.checkedItems, item.id()],
        modifiedAt: Date.now(),
      }));
    }
  }
  const skippedItems = computed(() =>
    items().filter((item) => session().skippedItems.includes(item.id())),
  );
  function toggleSkippedItem(item: Item) {
    if (!skipItems()) {
      return;
    }
    if (session().skippedItems.includes(item.id())) {
      updateSession((old) => ({
        ...old,
        skippedItems: old.skippedItems.filter((i) => i !== item.id()),
        modifiedAt: Date.now(),
      }));
    } else {
      updateSession((old) => ({
        ...old,
        skippedItems: [...old.skippedItems, item.id()],
        modifiedAt: Date.now(),
      }));
    }
  }

  function toggleCategoryCollapse(category: string) {
    if (session().collapsedCategories.includes(category)) {
      updateSession((old) => ({
        ...old,
        collapsedCategories: old.collapsedCategories.filter(
          (c) => c !== category,
        ),
        modifiedAt: Date.now(),
      }));
    } else {
      updateSession((old) => ({
        ...old,
        collapsedCategories: [...old.collapsedCategories, category],
        modifiedAt: Date.now(),
      }));
    }
  }

  const coloredItems = signal<string[]>([]);
  function colorItems(ids: string[]) {
    // equality check to prevent recursive updates
    if (
      coloredItems().length !== ids.length ||
      !ids.every((id) => coloredItems().includes(id))
    ) {
      coloredItems.set(ids);
    }
  }

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
        collapsed: session().collapsedCategories.includes(item.category),
        colored: session().statsVisible === 'distribution',
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
          session().statsVisible === 'heaviestItems' &&
          coloredItems().includes(item.id());
        const visible = session().hideCompleted ? !checked && !skipped : true;
        groups[item.category].items.push(
          new PacklistItem(item, checked, skipped, colored, visible),
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

  function resetViewState() {
    updateSession((old) => ({
      ...old,
      answersLocked: false,
      hideCompleted: false,
      statsVisible: undefined,
      modifiedAt: Date.now(),
    }));
  }

  let applicationStart = true;
  effect(() => {
    if (raw.hasValue() && raw.value()) {
      if (applicationStart) {
        applicationStart = false;
      } else {
        // reset packlist view modifications on rules change
        resetViewState();
      }
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
      sessions: computed((): (SavedSession | undefined)[] =>
        sessions()
          .filter((_, index) => index !== 0)
          .map((s, index) =>
            s
              ? {
                  index: index + 1,
                  sessionName: s.sessionName,
                  modifiedAt: s.modifiedAt,
                }
              : undefined,
          ),
      ),
      clearSlot(index: number) {
        sessions.update((oldSessions) => {
          const newSessions = [...oldSessions];
          newSessions[index] = undefined;
          return newSessions;
        });
      },
      currentSlot,
      copySessionToSlot(index: number) {
        sessions.update((oldSessions) => {
          const newSessions = [...oldSessions];
          newSessions[index] = { ...session(), modifiedAt: Date.now() };
          return newSessions;
        });
      },
      /** storage: the current packlist session */
      /** storage: the session name of the packlist */
      sessionName: computed(() => session().sessionName),
      setSessionName,
      /** storage: the answers from checked questions in the packlist */
      answers: computed(() => session().answers),
      updateAnswer,
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
      isAnswersLocked: computed(() => session().answersLocked),
      toggleAnswersLock,
      /** storage: hide completed items in the packlist */
      isHideCompleted: computed(() => session().hideCompleted),
      toggleHideCompleted,
      /** session: which stats to show */
      isStatsVisible: computed(() => session().statsVisible),
      setStatsVisible,
      /** storage: if already asked for weight tracking */
      askedWeightTracking,
    },
  };
};
