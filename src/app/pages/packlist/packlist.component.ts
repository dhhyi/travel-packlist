import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { VariableType } from '../../model/types';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { IconLockOpenComponent } from '../../icons/icon-lock-open/icon-lock-open.component';
import { IconLockComponent } from '../../icons/icon-lock/icon-lock.component';
import { NgClass } from '@angular/common';
import { GlobalState } from '../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-packlist',
  standalone: true,
  imports: [
    DisplayQuestionComponent,
    DisplayItemsComponent,
    IconLockOpenComponent,
    IconLockComponent,
    NgClass,
  ],
  templateUrl: './packlist.component.html',
})
export class PacklistComponent {
  private state = inject(GlobalState);
  private activeQuestions = this.state.signal('activeQuestions');
  isLockActive = this.state.signal('answersLocked');
  model = this.state.signal('answers');

  questions = computed(() =>
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
