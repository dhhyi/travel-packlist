import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Parser } from '../model/parser';
import { Rule, VariableType } from '../model/types';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { IconLockOpenComponent } from '../icons/icon-lock-open/icon-lock-open.component';
import { IconLockComponent } from '../icons/icon-lock/icon-lock.component';
import { NgClass } from '@angular/common';
import { Refactor } from '../model/refactor';
import { PersistentState } from '../state/persistent-state';

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
  private refactor = inject(Refactor);
  private state = inject(PersistentState);
  private parser = inject(Parser);

  model = this.state.signal('answers');

  private rules = computed<Rule[]>(() => {
    return this.parser.parseRules(this.state.get('rules'));
  });

  private activeRules = computed(() => {
    return this.refactor.filterActiveRules(this.model(), this.rules());
  });

  isLockActive = this.state.signal('answersLocked');

  questions = computed(() =>
    this.activeRules()
      .flatMap((rule) => rule.questions)
      .filter((q) => !this.isLockActive() || this.model()[q.variable]),
  );

  items = computed(() => this.activeRules().flatMap((rule) => rule.items));

  modelChange(variable: string, value: VariableType): void {
    this.model.update((model) => ({ ...model, [variable]: value }));
  }

  toggleLock() {
    const newValue = !this.state.get('answersLocked');
    this.state.set('answersLocked', newValue);
    this.isLockActive.set(newValue);
  }
}
