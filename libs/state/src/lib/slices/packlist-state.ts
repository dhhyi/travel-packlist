import { computed, inject } from '@angular/core';
import { Item, Refactor, VariableType } from '@travel-packlist/model';

import { createLocalStorageSignalState } from '../persistence/storage-signal';
import { RuleParsing } from './rule-parsing';

const create = createLocalStorageSignalState;

function serialize(item: Pick<Item, 'category' | 'name'>): string {
  return `${item.category}-${item.name}`;
}

export const packlistState = ({
  rules: { parsed: parsedRules },
}: RuleParsing) => {
  const answers = create<Record<string, VariableType>>('answers', {});
  const stringCheckedItems = create<string[]>('checkedItems', []);
  const collapsedCategories = create<string[]>('collapsedCategories', []);
  const answersLocked = create('answersLocked', false);

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
      /** derived: currently active items */
      items,
    },
    packlist: {
      /** storage: the answers from checked questions in the packlist */
      answers,
      /** derived: checked items */
      checkedItems,
      /** toggle the checked state of an item */
      toggleCheckedItem,
      /** storage: the categories that are collapsed in the packlist */
      collapsedCategories,
      /** storage: whether to lock the answers in the packlist */
      answersLocked,
      /** reset the packlist sub state */
      reset: () => {
        answers.set({});
        stringCheckedItems.set([]);
        collapsedCategories.set([]);
        answersLocked.set(false);
      },
    },
  };
};
