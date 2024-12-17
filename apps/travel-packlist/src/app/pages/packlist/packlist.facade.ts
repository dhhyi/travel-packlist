import { computed, inject, Injectable, Signal } from '@angular/core';
import { Item } from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';

function serialize(item: Item): string {
  return `${item.category}-${item.name}`;
}

interface PacklistView {
  checked: number;
  checkedWeight: number;
  totalWeight: number;
  numberOfItems: number;
  categories: Record<string, CategoryView>;
}

interface CategoryView {
  checked: number;
  checkedWeight: number;
  totalWeight: number;
  collapsed: boolean;
  items: (Item & { checked: boolean })[];
}
@Injectable({ providedIn: 'root' })
export class PacklistFacade {
  private state = inject(GlobalState);

  private checkedItems = this.state.signal('checkedItems');
  private collapsedCategories = this.state.signal('collapsedCategories');

  isItemChecked(item: Item): boolean {
    return this.checkedItems().includes(serialize(item));
  }

  isCategoryCollapsed(category: string): boolean {
    return this.collapsedCategories().includes(category);
  }

  toggleCheckedItem(item: Item) {
    const serialized = serialize(item);
    if (this.checkedItems().includes(serialized)) {
      this.checkedItems.update((old) => old.filter((i) => i !== serialized));
    } else {
      this.checkedItems.update((old) => [...old, serialized]);
    }
  }

  toggleCategoryCollapse(category: string) {
    if (this.collapsedCategories().includes(category)) {
      this.collapsedCategories.update((old) =>
        old.filter((c) => c !== category),
      );
    } else {
      this.collapsedCategories.update((old) => [...old, category]);
    }
  }

  readonly packlist: Signal<PacklistView> = computed(() => {
    const items = this.state.signal('activeItems')();
    let checked = 0;
    let checkedWeight = 0;
    let totalWeight = 0;
    const categories = items.reduce<Record<string, CategoryView>>(
      (groups, item) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!groups[item.category]) {
          groups[item.category] = {
            items: [],
            checked: 0,
            collapsed: this.isCategoryCollapsed(item.category),
            totalWeight: 0,
            checkedWeight: 0,
          };
        }
        groups[item.category].items.push({
          ...item,
          checked: this.isItemChecked(item),
        });
        if (this.isItemChecked(item)) {
          checked++;
          groups[item.category].checked++;
          checkedWeight += item.weight ?? 0;
          groups[item.category].checkedWeight += item.weight ?? 0;
        }
        groups[item.category].totalWeight += item.weight ?? 0;
        totalWeight += item.weight ?? 0;
        return groups;
      },
      {},
    );
    return {
      numberOfItems: items.length,
      categories,
      checked,
      checkedWeight,
      totalWeight,
    };
  });
}
