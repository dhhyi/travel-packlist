import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  afterNextRender,
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

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';
import { colorFromString } from '../../../util/colors';
import { ItemsStatusComponent } from './items-status/items-status.component';

const animateCategory = trigger('animateCategory', [
  transition('* <=> *', [
    group([
      query('div[role="list"]:enter', useAnimation(staggerInCard), {
        optional: true,
      }),
      query('div[role="list"]:leave', useAnimation(staggerOutCard), {
        optional: true,
      }),
      query('@*', [animateChild()], { optional: true }),
    ]),
  ]),
]);

const animateItems = trigger('animateItems', [
  transition('* <=> *', [
    query('@animateStrikeThrough', animateChild(), {
      optional: true,
      delay: '0.2s',
    }),
    group([
      query('@animateChevron', animateChild(), {
        optional: true,
      }),
      query(
        'div[role="listitem"]:enter',
        [
          style({ opacity: 0, height: 0 }),
          animate('0.2s ease-in', style({ opacity: 1, height: '*' })),
        ],
        { optional: true },
      ),
      query(
        'div[role="listitem"]:leave',
        [
          style({ opacity: 1, height: '*' }),
          animate('0.2s ease-in', style({ opacity: 0, height: 0 })),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);

const animateChevron = trigger('animateChevron', [
  state('true', style({ transform: 'rotate(0)' })),
  state('false', style({ transform: 'rotate(90deg)' })),
  transition('false => true', animate('0.5s ease-in-out')),
  transition(
    'true => false',
    animate(
      '0.5s ease-in-out',
      keyframes([
        style({ transform: 'rotate(0)' }),
        style({ transform: 'rotate(100deg)' }),
        style({ transform: 'rotate(80deg)' }),
      ]),
    ),
  ),
]);

const animateStrikeThrough = trigger('animateStrikeThrough', [
  state('true', style({ textDecorationColor: 'inherit' })),
  state('false', style({ textDecorationColor: 'transparent' })),
  transition('false => true', animate('0.2s ease-in-out')),
]);

@Component({
  selector: 'app-display-items',
  imports: [ItemsStatusComponent, IconKeyRightComponent],
  templateUrl: './display-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    animateCategory,
    animateItems,
    animateChevron,
    animateStrikeThrough,
  ],
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
    afterNextRender({
      write: () => {
        this.animationsDisabled.set(!this.state.config.animations());
      },
    });

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
