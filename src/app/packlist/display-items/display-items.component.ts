import {
  Component,
  computed,
  inject,
  input,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Item } from '../../../model/types';
import { PacklistPersistence } from '../packlist.persistence';
import { KeyValuePipe, NgClass } from '@angular/common';
import { ItemsStatusComponent } from './items-status/items-status.component';
import { ConfigPersistence } from '../../config/config.persistence';
import { Serializer } from '../../../model/serializer';
import { IconKeyDownComponent } from '../../icons/icon-key-down/icon-key-down.component';
import { IconKeyRightComponent } from '../../icons/icon-key-right/icon-key-right.component';

function serialize(item: Item): string {
  return `${item.category}-${item.name}`;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-items',
  standalone: true,
  imports: [
    KeyValuePipe,
    ItemsStatusComponent,
    NgClass,
    IconKeyDownComponent,
    IconKeyRightComponent,
  ],
  templateUrl: './display-items.component.html',
  styles: `
    progress::-webkit-progress-bar {
      border: 2px solid #ccc;
      border-radius: 5px;
      background-color: transparent;
    }
    progress::-webkit-progress-value {
      background-color: #999;
      border-radius: 3px;
    }
  `,
})
export class DisplayItemsComponent {
  items = input<Item[]>([]);

  private persistence = inject(PacklistPersistence);

  private checkedItems = signal(this.persistence.getCheckedItems());
  private collapsedGroups = signal(this.persistence.getCollapsedCategories());

  groupedItems = computed(() => {
    const checkedItems = this.checkedItems();
    const collapsedGroups = this.collapsedGroups();
    return this.items().reduce<
      Record<
        string,
        {
          items: (Item & { checked: boolean })[];
          checked: number;
          collapsed: boolean;
        }
      >
    >((groups, item) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!groups[item.category]) {
        groups[item.category] = {
          items: [],
          checked: 0,
          collapsed: collapsedGroups.includes(item.category),
        };
      }

      const checked = checkedItems.includes(serialize(item));
      groups[item.category].items.push({ ...item, checked });
      if (checked) {
        groups[item.category].checked++;
      }
      return groups;
    }, {});
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

  toggleGroup(group: string) {
    if (this.collapsedGroups().includes(group)) {
      this.collapsedGroups.update((old) => old.filter((g) => g !== group));
    } else {
      this.collapsedGroups.update((old) => [...old, group]);
    }
    this.persistence.setCollapsedCategories(
      this.collapsedGroups().length ? this.collapsedGroups() : null,
    );
  }
}
