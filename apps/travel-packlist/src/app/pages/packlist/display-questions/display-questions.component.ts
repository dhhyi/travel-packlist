import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
  useAnimation,
} from '@angular/animations';
import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  IconLockOpenComponent,
  IconLockComponent,
  IconCheckmarkComponent,
} from '@travel-packlist/icons';

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';
import { PacklistFacade } from '../packlist.facade';

const animateQuestions = trigger('animateQuestions', [
  transition('* <=> *', [
    group([
      query('div.card:enter', useAnimation(staggerInCard), { optional: true }),
      query('div.card:leave', useAnimation(staggerOutCard), { optional: true }),
      query(
        'app-icon-checkmark:enter',
        [
          style({ transform: 'translateX(200%)' }),
          animate('0.3s ease-in', style({ transform: 'translateX(0)' })),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);

@Component({
  selector: 'app-display-questions',
  templateUrl: './display-questions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconLockOpenComponent, IconLockComponent, IconCheckmarkComponent],
  animations: [animateQuestions],
})
export class DisplayQuestionsComponent {
  facade = inject(PacklistFacade);

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRender(() => {
      this.animationsDisabled.set(this.facade.isAccessibleMode());
    });
  }
}