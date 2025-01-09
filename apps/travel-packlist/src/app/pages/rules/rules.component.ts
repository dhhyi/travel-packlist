import {
  Component,
  inject,
  ChangeDetectionStrategy,
  computed,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconSwapComponent } from '@travel-packlist/icons';
import {
  Refactor,
  PleaseSelect,
  serializeRules,
  Rule,
} from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { EditorRuleComponent } from './editor-rule/editor-rule.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-rules',
  imports: [
    EditorRuleComponent,
    ToolbarComponent,
    IconSwapComponent,
    RouterLink,
  ],
  templateUrl: './rules.component.html',
})
export default class RulesComponent {
  private refactor = inject(Refactor);

  private state = inject(GLOBAL_STATE);
  private parsedRules = this.state.rules.parsed;
  private activeRules = this.state.active.rules;
  mode = this.state.router.rulesMode;
  accessibility = this.state.config.accessibility;
  filter = this.state.router.filterRulesQuery;
  readonly highlightRule = signal<number | undefined>(undefined);

  readonly visibleRules = computed(() => {
    const filter = this.filter();
    if (filter === '') {
      return this.parsedRules().map((rule, index) => ({ rule, index }));
    }
    return this.parsedRules()
      .map((rule, index) => ({ rule, index }))
      .filter((item) => {
        const filter = this.filter();
        return !filter || this.refactor.contains(item.rule, filter);
      });
  });

  readonly goToPacklistButtonVisible = computed(
    () => this.state.browser.scrollY() > 100,
  );

  ruleLabel(index: number) {
    return $localize`Rule #${(index + 1).toString()}:NUMBER:`;
  }

  private updateRules(rules: Rule[]) {
    const serializedRules = serializeRules(rules);
    this.state.rules.raw.set(serializedRules);
  }

  updateRule(index: number, rule: Rule) {
    const rules = this.parsedRules();
    rules[index] = rule;
    this.updateRules([...rules]);
  }

  deleteRule(index: number) {
    const rules = this.parsedRules();
    rules.splice(index, 1);
    this.updateRules([...rules]);
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

    this.updateRules([...rules]);

    this.highlightRule.set(insertAt);
    setTimeout(() => {
      this.highlightRule.set(undefined);
    }, 4000);
  }

  addRuleAndEdit() {
    this.addRule();
    this.mode.set('edit');
  }

  swapRules(index1: number, index2: number) {
    const rules = this.parsedRules();
    const temp = rules[index1];
    rules[index1] = rules[index2];
    rules[index2] = temp;

    this.updateRules([...rules]);
  }

  showAsDisabled(rule: Rule): boolean {
    return (
      this.state.config.fadeOutDisabledRules() &&
      !this.activeRules().includes(rule)
    );
  }

  renameVariable([oldVariable, newVariable]: [string, string]) {
    const rules = this.refactor.renameVariable(
      oldVariable,
      newVariable,
      this.parsedRules(),
    );

    this.updateRules(rules);
  }
}
