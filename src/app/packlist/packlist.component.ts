import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RulesPersistence } from '../rules/rules.persistence';
import { Parser } from '../../model/parser';
import { Rule, VariableType } from '../../model/types';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { IconLockOpenComponent } from '../icons/icon-lock-open/icon-lock-open.component';
import { IconLockComponent } from '../icons/icon-lock/icon-lock.component';
import { NgClass } from '@angular/common';
import { Refactor } from '../../model/refactor';
import { AppState } from '../app.state';

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
export class PacklistComponent implements OnInit {
  private rulesPersistence = inject(RulesPersistence);
  private refactor = inject(Refactor);
  private state = inject(AppState);

  private rules = signal<Rule[]>([]);

  model = this.state.signal('answers');

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

  private parser = inject(Parser);

  ngOnInit(): void {
    const rules = this.rulesPersistence.getRules();
    this.rules.set(this.parser.parseRules(rules));
  }

  modelChange(variable: string, value: VariableType): void {
    this.model.update((model) => ({ ...model, [variable]: value }));
  }

  toggleLock() {
    const newValue = !this.state.get('answersLocked');
    this.state.set('answersLocked', newValue);
    this.isLockActive.set(newValue);
  }
}
