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
  afterRender,
  ChangeDetectionStrategy,
  Component,
  inject,
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
    group([
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
      query('@*', [animateChild()], { optional: true }),
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-items',
  imports: [ItemsStatusComponent, IconKeyRightComponent],
  templateUrl: './display-items.component.html',
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
  toggleCheckedItem = this.state.packlist.toggleCheckedItem;

  serializeWeight = serializeWeight;

  serializeWeightPartition = serializeWeightPartition;

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRender(() => {
      this.animationsDisabled.set(!this.state.config.animations());
    });
  }

  dblclick(item: Item) {
    if (!this.state.browser.isMobile()) {
      this.state.packlist.toggleSkippedItem(item);
    }
  }

  private touchAction: unknown;

  touchStart(item: Item) {
    if (this.state.browser.isMobile()) {
      this.touchAction = setTimeout(() => {
        this.state.packlist.toggleSkippedItem(item);
      }, 800);
    }
  }

  touchEnd() {
    if (this.touchAction) {
      clearTimeout(this.touchAction as number);
    }
  }
}
