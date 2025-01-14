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
  Component,
  inject,
  ChangeDetectionStrategy,
  signal,
  afterRender,
} from '@angular/core';
import { IconKeyRightComponent } from '@travel-packlist/icons';

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';
import {
  PacklistFacade,
  serializeWeight,
  serializeWeightPartition,
} from '../packlist.facade';
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
  facade = inject(PacklistFacade);

  serializeWeight = serializeWeight;

  serializeWeightPartition = serializeWeightPartition;

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRender(() => {
      this.animationsDisabled.set(this.facade.isAccessibleMode());
    });
  }
}
