import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RulesPersistence } from '../rules/rules.persistence';
import { parseRules } from '../../model/parser';
import { Rule, VariableName, VariableType } from '../../model/types';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-packlist',
  standalone: true,
  imports: [CommonModule, QuestionComponent, ItemsComponent],
  templateUrl: './packlist.component.html',
  styleUrl: './packlist.component.css'
})
export class PacklistComponent implements OnInit {
  private persistence = inject(RulesPersistence);

  private rules = signal<Rule[]>([]);
  private model = signal<Record<VariableName, VariableType>>({})

  private activeRules = computed(() => {
    const model = this.model();
    return this.rules()
      .filter(rule => rule.condition.evaluate(model));
  });

  questions = computed(() => this.activeRules()
    .flatMap(rule => rule.effects.questions));

  items = computed(() => this.activeRules()
    .flatMap(rule => rule.effects.items));

  ngOnInit(): void {
    const rules = this.persistence.getRules();
    try {
      this.rules.set(parseRules(rules));
    } catch (error) {
      console.error(error);
    }
  }

  modelChange([variable, value]: [VariableName, VariableType]): void {
    this.model.update(model => ({ ...model, [variable]: value }));
  }
}
