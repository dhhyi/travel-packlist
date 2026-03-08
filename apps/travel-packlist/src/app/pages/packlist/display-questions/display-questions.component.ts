import {
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

  isAnswersLockActive = this.state.packlist.isAnswersLocked;

  readonly displayQuestions = computed(() => {
    const answers = this.state.packlist.answers();
    return this.questions()
      .filter((q) => !this.isAnswersLockActive() || answers[q.variable])
      .map((q) => ({
        question: q.question,
        variable: q.variable,
        isActive: answers[q.variable],
      }));
  });

  rulesMode = this.state.rules.mode;

  toggleQuestion = (variable: Question['variable']): void => {
    if (this.isAnswersLockActive()) {
      return;
    }
    const previous = this.state.packlist.answers()[variable];
    this.state.packlist.updateAnswer(variable, !previous);
  };

  goToRulesEdit() {
    this.state.router.go('rules->edit');
  }

  readonly animationsDisabled = signal(true);

  constructor() {
    setTimeout(() => {
      this.animationsDisabled.set(!this.state.config.animations());
    }, 1000);
  }
}
