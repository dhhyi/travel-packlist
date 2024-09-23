import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
  computed,
  effect,
} from '@angular/core';
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
import { Refactor } from '../../model/refactor';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class RulesComponent {
  private parsedRules = signal<Rule[]>([]);

  persistence = inject(RulesPersistence);

  mode = inject(RulesMode);

  error = signal<string | undefined>(undefined);

  private answers = inject(PacklistPersistence).getAnswers();

  private config = inject(ConfigPersistence);

  private parser = inject(Parser);
  private serializer = inject(Serializer);
  private refactor = inject(Refactor);

  categories = computed(() =>
    this.refactor.extractCategories(this.parsedRules()),
  );

  variables = computed(() =>
    this.refactor.extractVariables(this.parsedRules()),
  );

  filter = signal('');

  visibleRules = computed(() => {
    const filter = this.filter();
    if (filter === '') {
      return this.parsedRules().map((rule, index) => ({ rule, index }));
    }
    return this.parsedRules()
      .map((rule, index) => ({ rule, index }))
      .filter((item) => this.refactor.contains(item.rule, this.filter()));
  });

  constructor() {
    try {
      this.parsedRules.set(this.parser.parseRules(this.persistence.getRules()));
      this.error.set(undefined);

      effect(() => {
        const rules = this.parsedRules();
        const serializedRules = this.serializer.serializeRules(rules);
        this.persistence.saveRules(serializedRules);
      });
    } catch (error) {
      if (error instanceof Error) {
        this.error.set(error.message);
      } else {
        this.error.set('Unknown error');
      }
      console.error(error);
    }
  }

  updateRule(index: number, rule: Rule | null) {
    const rules = this.parsedRules();
    if (rule) {
      rules[index] = rule;
    } else {
      rules.splice(index, 1);
    }
    this.parsedRules.set([...rules]);
  }

  addRule() {
    let insertAt = this.parsedRules().length;
    const candidates: number[] = [];
    for (let i = 0; i < this.parsedRules().length; i++) {
      const ruleElement = document.querySelector(`#rule-${i.toString()}`);
      if (ruleElement) {
        const rect = ruleElement.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInViewport) {
          candidates.push(i);
        }
      }
    }

    if (!candidates.includes(insertAt - 1)) {
      insertAt = candidates[0] + 1;
    }

    const newRule = new Rule(new PleaseSelect());

    const rules = this.parsedRules();
    rules.splice(insertAt, 0, newRule);

    this.parsedRules.set([...rules]);
  }

  swapRules(index1: number, index2: number) {
    const rules = this.parsedRules();
    const temp = rules[index1];
    rules[index1] = rules[index2];
    rules[index2] = temp;

    this.parsedRules.set([...rules]);
  }

  showAsDisabled(rule: Rule): boolean {
    return (
      this.config.isFadeOutDisabledRules() &&
      !this.refactor
        .filterActiveRules(this.answers, this.parsedRules())
        .includes(rule)
    );
  }

  renameVariable([oldVariable, newVariable]: [string, string]) {
    const rules = this.refactor.renameVariable(
      oldVariable,
      newVariable,
      this.parsedRules(),
    );

    this.parsedRules.set(rules);
  }

  filterRules(term: string) {
    if (term !== this.filter()) this.filter.set(term);
  }
}
