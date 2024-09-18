import { Component, inject, OnInit, signal } from '@angular/core';
import { PleaseSelect, Rule } from '../../model/types';
import { Parser } from '../../model/parser';
import { EditorRuleComponent } from './editor-rule/editor-rule.component';
import { RulesPersistence } from './rules.persistence';
import { Serializer } from '../../model/serializer';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RulesMode } from './rules.mode';
import { IconSwapComponent } from '../icons/icon-swap/icon-swap.component';
import { PacklistPersistence } from '../packlist/packlist.persistence';
import { NgClass } from '@angular/common';
import { ConfigPersistence } from '../config/config.persistence';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [
    EditorRuleComponent,
    ToolbarComponent,
    IconSwapComponent,
    NgClass,
    ErrorComponent,
  ],
  templateUrl: './rules.component.html',
})
export class RulesComponent implements OnInit {
  parsedRules = signal<Rule[]>([]);

  categories = signal<string[]>([]);

  variables = signal<string[]>([]);

  persistence = inject(RulesPersistence);

  mode = inject(RulesMode);

  error = signal<string | undefined>(undefined);

  private answers = inject(PacklistPersistence).getAnswers();

  private config = inject(ConfigPersistence);

  private parser = inject(Parser);
  private serializer = inject(Serializer);

  ngOnInit(): void {
    try {
      this.calculateFields(this.parser.parseRules(this.persistence.getRules()));
      this.error.set(undefined);
    } catch (error) {
      if (error instanceof Error) {
        this.error.set(error.message);
      } else {
        this.error.set('Unknown error');
      }
      console.error(error);
    }
  }

  calculateFields(parsedRules: Rule[]) {
    this.parsedRules.set(parsedRules);
    this.categories.set(this.parser.extractCategories(parsedRules));
    this.variables.set(this.parser.extractVariables(parsedRules));
  }

  updateRule(index: number, rule: Rule | null) {
    console.log('updateRule', index, rule);

    const rules = this.parsedRules();
    if (rule) {
      rules[index] = rule;
    } else {
      rules.splice(index, 1);
    }
    const serializedRules = this.serializer.serializeRules(rules);
    this.persistence.saveRules(serializedRules);
    this.calculateFields(rules);
  }

  addRule() {
    let insertAt = this.parsedRules().length;
    const candidates: number[] = [];
    for (let i = 0; i < this.parsedRules().length; i++) {
      const ruleElement = document.querySelector(`#rule-${i}`);
      if (ruleElement) {
        const rect = ruleElement.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInViewport) {
          candidates.push(i);
        }
      }
    }

    console.log({ candidates, insertAt });

    if (!candidates.includes(insertAt - 1)) {
      insertAt = candidates[0] + 1;
    }

    const newRule = {
      condition: new PleaseSelect(),
      effects: { questions: [], items: [] },
    };

    const rules = this.parsedRules();
    rules.splice(insertAt, 0, newRule);

    const serializedRules = this.serializer.serializeRules(rules);
    this.persistence.saveRules(serializedRules);
    this.calculateFields(rules);
  }

  swapRules(index1: number, index2: number) {
    const rules = this.parsedRules();
    const temp = rules[index1];
    rules[index1] = rules[index2];
    rules[index2] = temp;
    const serializedRules = this.serializer.serializeRules(rules);
    this.persistence.saveRules(serializedRules);
    this.calculateFields(rules);
  }

  showAsDisabled(rule: Rule): boolean {
    return (
      this.config.isFadeOutDisabledRules() &&
      !rule.condition.evaluate(this.answers)
    );
  }
}