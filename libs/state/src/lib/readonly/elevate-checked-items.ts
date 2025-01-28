import { computed } from '@angular/core';
import { Item } from '@travel-packlist/model';

import { LocalStorageState } from '../read-write/localstorage-state';
import { RuleAnalysis } from './rule-analysis';

function serialize(item: Pick<Item, 'category' | 'name'>): string {
  return `${item.category}-${item.name}`;
}

export const elevateCheckedItems = ({
  active: { items },
  packlist: { checkedItems: stringCheckedItems },
}: LocalStorageState & RuleAnalysis) => {
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
    packlist: {
      /** derived: checked items */
      checkedItems,
      /** toggle the checked state of an item */
      toggleCheckedItem,
    },
  };
};
