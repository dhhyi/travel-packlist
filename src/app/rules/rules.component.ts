import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PleaseSelect, Rule } from '../../model/types';
import {
  extractCategories,
  extractVariables,
  parseRules,
} from '../../model/parser';
import { EditorRuleComponent } from './editor-rule/editor-rule.component';
import { EditRulesRawComponent } from './edit-rules-raw/edit-rules-raw.component';
import { RulesPersistence } from './rules.persistence';
import { serializeRules } from '../../model/serializer';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [ReactiveFormsModule, EditorRuleComponent, EditRulesRawComponent],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css',
})
export class RulesComponent implements OnInit {
  parsedRules = signal<Rule[]>([]);
  categories = computed<string[]>(() => extractCategories(this.parsedRules()));
  variables = computed<string[]>(() => extractVariables(this.parsedRules()));

  persistence = inject(RulesPersistence);

  ngOnInit(): void {
    this.parsedRules.set(parseRules(this.persistence.getRules()));
  }

  updateRule(index: number, rule: Rule | null) {
    const rules = this.parsedRules();
    if (rule) {
      rules[index] = rule;
    } else {
      rules.splice(index, 1);
    }
    this.parsedRules.set(rules);
    this.persistence.saveRules(serializeRules(rules));
  }

  addRule() {
    this.updateRule(this.parsedRules().length, {
      condition: new PleaseSelect(),
      effects: { questions: [], items: [] },
    });
  }
}
