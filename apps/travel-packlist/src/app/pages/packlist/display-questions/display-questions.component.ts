import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { IconCheckmarkComponent } from '@travel-packlist/icons';
import { Question } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';

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
  imports: [IconCheckmarkComponent],
  templateUrl: './display-questions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animateQuestions],
})
export class DisplayQuestionsComponent {
  private state = inject(GLOBAL_STATE);

  questions = this.state.active.questions;

  isQuestionActive = (question: Question): boolean =>
    this.state.packlist.answers()[question.variable];

  isAnswersLockActive = this.state.packlist.answersLocked;

  readonly displayQuestions = computed(() =>
    this.questions().filter(
      (q) => !this.isAnswersLockActive() || this.isQuestionActive(q),
    ),
  );

  rulesMode = this.state.rules.mode;

  toggleQuestion = (question: Question): void => {
    if (this.isAnswersLockActive()) {
      return;
    }
    this.state.packlist.answers.update((model) => ({
      ...model,
      [question.variable]: !model[question.variable],
    }));
  };

  goToRulesEdit() {
    this.state.router.go('rules->edit');
  }

  readonly animationsDisabled = signal(true);

  constructor() {
    afterNextRender({
      write: () => {
        this.animationsDisabled.set(!this.state.config.animations());
      },
    });
  }
}
