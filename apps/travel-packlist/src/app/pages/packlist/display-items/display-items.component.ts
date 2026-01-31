import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { IconKeyRightComponent } from '@travel-packlist/icons';
import {
  Item,
  serializeWeight,
  serializeWeightPartition,
} from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { colorFromString } from '../../../util/colors';
import { ItemsStatusComponent } from './items-status/items-status.component';

@Component({
  selector: 'app-display-items',
  imports: [ItemsStatusComponent, IconKeyRightComponent],
  templateUrl: './display-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayItemsComponent {
  private state = inject(GLOBAL_STATE);
  stats = this.state.packlist.stats;
  packlist = this.state.packlist.model;
  trackWeight = this.state.config.trackWeight;
  toggleCategoryCollapse = this.state.packlist.toggleCategoryCollapse;

  serializeWeight = serializeWeight;

  serializeWeightPartition = serializeWeightPartition;

  readonly animationsDisabled = signal(true);

  constructor() {
    setTimeout(() => {
      this.animationsDisabled.set(!this.state.config.animations());
    }, 1000);

    const highlightedItemId = linkedSignal(() => this.state.router.fragment());
    effect(() => {
      if (highlightedItemId()) {
        // expand category if items are highlighted
        const category = this.state.packlist
          .model()
          .find((category) =>
            category.items.some((item) => item.id() === highlightedItemId()),
          );
        highlightedItemId.set(undefined);
        if (category?.collapsed) {
          this.state.packlist.toggleCategoryCollapse(category.name);
        }
      }
    });
  }

  toggleCheckedItem(item: Item & { checked: boolean }) {
    if (this.state.packlist.isHideCompleted()) {
      item.checked = !item.checked;
      setTimeout(() => {
        this.state.packlist.toggleCheckedItem(item);
      }, 0);
    } else {
      this.state.packlist.toggleCheckedItem(item);
    }
  }

  dblclick(item: Item) {
    if (!this.state.browser.isMobile()) {
      this.state.packlist.toggleSkippedItem(item);
    }
  }

  private touchAction: number | undefined;

  tapStart(item: Item) {
    if (this.state.browser.isMobile()) {
      this.touchAction = setTimeout(() => {
        this.state.packlist.toggleSkippedItem(item);
      }, 800);
    }
  }

  tapEnd() {
    if (this.touchAction) {
      clearTimeout(this.touchAction);
    }
  }

  backgroundColor(item: { id: (() => string) | string; colored: boolean }) {
    if (item.colored) {
      const id = typeof item.id === 'function' ? item.id() : item.id;
      return colorFromString(id);
    }
    return undefined;
  }
}
