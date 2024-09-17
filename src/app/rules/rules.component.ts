import { Component, inject, OnInit, signal } from '@angular/core';
import { PleaseSelect, Rule } from '../../model/types';
import {
  extractCategories,
  extractVariables,
  parseRules,
} from '../../model/parser';
import { EditorRuleComponent } from './editor-rule/editor-rule.component';
import { RulesPersistence } from './rules.persistence';
import { serializeRules } from '../../model/serializer';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RulesMode } from './rules.mode';
import { IconSwapComponent } from '../icons/icon-swap/icon-swap.component';
import { PacklistPersistence } from '../packlist/packlist.persistence';
import { NgClass } from '@angular/common';
import { ConfigPersistence } from '../config/config.persistence';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [EditorRuleComponent, ToolbarComponent, IconSwapComponent, NgClass],
  templateUrl: './rules.component.html',
})
export class RulesComponent implements OnInit {
  parsedRules = signal<Rule[]>([]);

  categories = signal<string[]>([]);

  variables = signal<string[]>([]);

  persistence = inject(RulesPersistence);

  mode = inject(RulesMode);

  private answers = inject(PacklistPersistence).getAnswers();

  private config = inject(ConfigPersistence);

  ngOnInit(): void {
    this.calculateFields(parseRules(this.persistence.getRules()));
  }

  calculateFields(parsedRules: Rule[]) {
    this.parsedRules.set(parsedRules);
    this.categories.set(extractCategories(parsedRules));
    this.variables.set(extractVariables(parsedRules));
  }

  updateRule(index: number, rule: Rule | null) {
    console.log('updateRule', index, rule);

    const rules = this.parsedRules();
    if (rule) {
      rules[index] = rule;
    } else {
      rules.splice(index, 1);
    }
    const serializedRules = serializeRules(rules);
    this.persistence.saveRules(serializedRules);
    this.calculateFields(rules);
  }

  addRule() {
    this.updateRule(this.parsedRules().length, {
      condition: new PleaseSelect(),
      effects: { questions: [], items: [] },
    });
    // scroll to smooth to bottom with a delay of 500ms
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  }

  swapRules(index1: number, index2: number) {
    const rules = this.parsedRules();
    const temp = rules[index1];
    rules[index1] = rules[index2];
    rules[index2] = temp;
    const serializedRules = serializeRules(rules);
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
