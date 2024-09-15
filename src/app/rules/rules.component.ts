import { Component, inject, OnInit, signal } from '@angular/core';
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
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    EditorRuleComponent,
    EditRulesRawComponent,
    ToolbarComponent,
  ],
  templateUrl: './rules.component.html',
})
export class RulesComponent implements OnInit {
  parsedRules = signal<Rule[]>([]);

  categories = signal<string[]>([]);

  variables = signal<string[]>([]);

  persistence = inject(RulesPersistence);

  ngOnInit(): void {
    this.calculateFields(parseRules(this.persistence.getRules()));
  }

  calculateFields(parsedRules: Rule[]) {
    this.parsedRules.set(parsedRules);
    this.categories.set(extractCategories(parsedRules));
    this.variables.set(extractVariables(parsedRules));
  }

  updateRule(index: number, rule: Rule | null) {
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
  }
}
