import { Component, computed, inject, input, signal } from '@angular/core';
import { Item } from '../../../model/types';
import { PacklistPersistence } from '../packlist.persistence';
import { KeyValuePipe, NgClass } from '@angular/common';
import { ItemsStatusComponent } from './items-status/items-status.component';

function serialize(item: Item): string {
  return `${item.category}-${item.name}`;
}

@Component({
  selector: 'app-display-items',
  standalone: true,
  imports: [KeyValuePipe, ItemsStatusComponent, NgClass],
  templateUrl: './display-items.component.html',
})
export class DisplayItemsComponent {
  items = input<Item[]>([]);

  persistence = inject(PacklistPersistence);

  checkedItems = signal(this.persistence.getCheckedItems());

  groupedItems = computed(() => {
    const checkedItems = this.checkedItems();
    return this.items().reduce(
      (groups, item) => {
        if (!groups[item.category]) {
          groups[item.category] = { items: [], checked: 0 };
        }

        const checked = checkedItems.includes(serialize(item));
        groups[item.category].items.push({ ...item, checked });
        if (checked) {
          groups[item.category].checked++;
        }
        return groups;
      },
      {} as Record<
        string,
        { items: (Item & { checked: boolean })[]; checked: number }
      >,
    );
  });

  toggle(item: Item) {
    const serializedItem = serialize(item);
    if (this.checkedItems().includes(serializedItem)) {
      this.checkedItems.update((checkedItems) =>
        checkedItems.filter((checkedItem) => checkedItem !== serializedItem),
      );
    } else {
      this.checkedItems.update((checkedItems) => [
        ...checkedItems,
        serializedItem,
      ]);
    }
    this.persistence.setCheckedItems(this.checkedItems());
  }
}
