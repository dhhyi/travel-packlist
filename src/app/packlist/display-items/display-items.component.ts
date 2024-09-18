import { Component, computed, inject, input, signal } from '@angular/core';
import { Item } from '../../../model/types';
import { PacklistPersistence } from '../packlist.persistence';
import { KeyValuePipe, NgClass } from '@angular/common';
import { ItemsStatusComponent } from './items-status/items-status.component';
import { ConfigPersistence } from '../../config/config.persistence';
import { Serializer } from '../../../model/serializer';

function serialize(item: Item): string {
  return `${item.category}-${item.name}`;
}

@Component({
  selector: 'app-display-items',
  standalone: true,
  imports: [KeyValuePipe, ItemsStatusComponent, NgClass],
  templateUrl: './display-items.component.html',
  styles: [
    `
      progress::-webkit-progress-bar {
        border: 1px solid #999;
        border-radius: 5px;
        background-color: transparent;
      }
      progress::-webkit-progress-value {
        background-color: #999;
      }
    `,
  ],
})
export class DisplayItemsComponent {
  items = input<Item[]>([]);

  private persistence = inject(PacklistPersistence);

  private checkedItems = signal(this.persistence.getCheckedItems());

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

  currentlyCheckedItems = computed(() =>
    Object.values(this.groupedItems()).reduce(
      (checkedItems, group) =>
        checkedItems + group.items.filter((item) => item.checked).length,
      0,
    ),
  );

  trackWeight = inject(ConfigPersistence).isTrackWeight();

  weightTotal = computed(() =>
    Math.round(
      this.items().reduce((total, item) => total + (item.weight ?? 0), 0),
    ),
  );

  weightChecked = computed(() =>
    Math.round(
      this.items().reduce(
        (total, item) =>
          total +
          (this.checkedItems().includes(serialize(item))
            ? (item.weight ?? 0)
            : 0),
        0,
      ),
    ),
  );

  private serializer = inject(Serializer);
  serializeWeight = this.serializer.serializeWeight.bind(this.serializer);

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
