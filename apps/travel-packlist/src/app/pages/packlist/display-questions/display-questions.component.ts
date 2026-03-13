import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { IconCheckmarkComponent } from '@travel-packlist/icons';
import { Question } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { pairwise, startWith } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { stagger } from './stagger';

@Component({
  selector: 'app-display-questions',
  imports: [IconCheckmarkComponent, AsyncPipe],
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
  readonly displayQuestions$ = toObservable(this.displayQuestions).pipe(
    startWith([] as ReturnType<typeof this.displayQuestions>),
    pairwise(),
    concatMap(([prev, curr]) =>
      stagger(
        prev,
        curr,
        (a, b) => a.variable === b.variable && a.question === b.question,
        100,
      ),
    ),
    startWith(this.displayQuestions()),
  );

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

  readonly enterAnimation = signal('');
  readonly leaveAnimation = signal('');

  constructor() {
    this.state.browser.animateEffect('animate-fade-in', this.enterAnimation);
    this.state.browser.animateEffect('animate-fade-out', this.leaveAnimation);
  }
}
