import { KeyValuePipe, NgClass } from '@angular/common';
import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  IconKeyDownComponent,
  IconKeyRightComponent,
} from '@travel-packlist/icons';
import { serializeWeight, Item } from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';

import { ItemsStatusComponent } from '../items-status/items-status.component';
import { PacklistFacade } from '../packlist.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-items',
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
  private state = inject(GlobalState);

  private facade = inject(PacklistFacade);
  readonly view = this.facade.packlist;

  readonly orderBy = computed(() => {
    const sorting = this.state.signal('categorySorting')();
    return sorting === 'definition' ? () => 0 : undefined;
  });

  trackWeight = this.state.signal('trackWeight');

  serializeWeight = serializeWeight;

  serializeWeightPartition(checked: number, total: number): string {
    return (
      serializeWeight(checked, undefined, 1) +
      ' / ' +
      serializeWeight(total, undefined, 1)
    );
  }

  toggleCheckedItem(item: Item) {
    this.facade.toggleCheckedItem(item);
  }

  toggleCategoryCollapse(category: string) {
    this.facade.toggleCategoryCollapse(category);
  }
}
