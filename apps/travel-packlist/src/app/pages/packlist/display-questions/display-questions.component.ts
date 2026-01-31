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

@Component({
  selector: 'app-display-questions',
  imports: [IconCheckmarkComponent],
  templateUrl: './display-questions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayQuestionsComponent {
  private state = inject(GLOBAL_STATE);

  questions = this.state.active.questions;

  isQuestionActive = (question: Question): boolean =>
    this.state.packlist.answers()[question.variable];

  isAnswersLockActive = this.state.packlist.isAnswersLocked;

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
    // this.state.packlist.answers.update((model) => ({
    //   ...model,
    //   [question.variable]: !model[question.variable],
    // }));
    this.state.packlist.updateAnswer(
      question.variable,
      !this.isQuestionActive(question),
    );
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
