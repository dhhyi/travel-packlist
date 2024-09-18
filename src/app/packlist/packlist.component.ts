import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RulesPersistence } from '../rules/rules.persistence';
import { Parser } from '../../model/parser';
import { Rule, VariableName, VariableType } from '../../model/types';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { PacklistPersistence } from './packlist.persistence';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-packlist',
  standalone: true,
  imports: [DisplayQuestionComponent, DisplayItemsComponent, ErrorComponent],
  templateUrl: './packlist.component.html',
})
export class PacklistComponent implements OnInit {
  private rulesPersistence = inject(RulesPersistence);
  private packlistPersistence = inject(PacklistPersistence);

  private rules = signal<Rule[]>([]);

  model = signal<Record<VariableName, VariableType>>(
    this.packlistPersistence.getAnswers(),
  );

  private activeRules = computed(() => {
    const model = this.model();
    return this.rules().filter((rule) => rule.condition.evaluate(model));
  });

  questions = computed(() =>
    this.activeRules().flatMap((rule) => rule.effects.questions),
  );

  items = computed(() =>
    this.activeRules().flatMap((rule) => rule.effects.items),
  );

  error = signal<string | undefined>(undefined);

  private parser = inject(Parser);

  constructor() {
    effect(() => {
      const model = this.model();
      this.packlistPersistence.saveAnswers(model);
    });
  }

  ngOnInit(): void {
    const rules = this.rulesPersistence.getRules();
    try {
      this.rules.set(this.parser.parseRules(rules));
      this.error.set(undefined);
    } catch (error) {
      if (error instanceof Error) {
        this.error.set(error.message);
      } else {
        this.error.set('An unknown error occurred');
      }
      console.error(error);
    }
  }

  modelChange(variable: VariableName, value: VariableType): void {
    this.model.update((model) => ({ ...model, [variable]: value }));
  }
}
