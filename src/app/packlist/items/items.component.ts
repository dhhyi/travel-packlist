import { Component, computed, inject, input } from '@angular/core';
import { Item } from '../../../model/types';
import { PacklistPersistence } from '../packlist.persistence';

function serialize(item: Item): string {
  return `${item.category}-${item.name}`;
}

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  items = input<Item[]>([]);

  persistence = inject(PacklistPersistence);

  checkedItems: string[] = this.persistence.getCheckedItems();

  groupedItems = computed(() =>
    Object.entries(
      this.items().reduce(
        (groups, item) => {
          if (!groups[item.category]) {
            groups[item.category] = [];
          }
          groups[item.category].push(item);
          return groups;
        },
        {} as Record<string, Item[]>,
      ),
    ),
  );

  isChecked(item: Item) {
    return this.checkedItems.includes(serialize(item));
  }

  toggle(item: Item) {
    const serializedItem = serialize(item);
    if (this.checkedItems.includes(serializedItem)) {
      this.checkedItems = this.checkedItems.filter(
        (checkedItem) => checkedItem !== serializedItem,
      );
    } else {
      this.checkedItems = [...this.checkedItems, serializedItem];
    }
    this.persistence.setCheckedItems(this.checkedItems);
  }
}
