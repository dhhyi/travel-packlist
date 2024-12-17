import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  IconLockOpenComponent,
  IconLockComponent,
} from '@travel-packlist/icons';
import { VariableType } from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';

import { DisplayItemsComponent } from './display-items/display-items.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-packlist',
  imports: [
    DisplayQuestionComponent,
    DisplayItemsComponent,
    IconLockOpenComponent,
    IconLockComponent,
    NgClass,
  ],
  templateUrl: './packlist.component.html',
})
export default class PacklistComponent {
  private state = inject(GlobalState);
  private activeQuestions = this.state.signal('activeQuestions');
  isLockActive = this.state.signal('answersLocked');
  model = this.state.signal('answers');

  readonly questions = computed(() =>
    this.activeQuestions().filter(
      (q) => !this.isLockActive() || this.model()[q.variable],
    ),
  );

  modelChange(variable: string, value: VariableType): void {
    this.model.update((model) => ({ ...model, [variable]: value }));
  }

  toggleLock() {
    this.isLockActive.update((lock) => !lock);
  }
}
