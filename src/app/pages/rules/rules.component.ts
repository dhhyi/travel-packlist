import {
  Component,
  inject,
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { PleaseSelect, Rule } from '../../model/types';
import { EditorRuleComponent } from './editor-rule/editor-rule.component';
import { Serializer } from '../../model/serializer';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IconSwapComponent } from '../../icons/icon-swap/icon-swap.component';
import { NgClass } from '@angular/common';
import { Refactor } from '../../model/refactor';
import { GlobalState } from '../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-rules',
  imports: [EditorRuleComponent, ToolbarComponent, IconSwapComponent, NgClass],
  templateUrl: './rules.component.html',
})
export class RulesComponent {
  private serializer = inject(Serializer);
  private refactor = inject(Refactor);

  private state = inject(GlobalState);
  private parsedRules = this.state.signal('parsedRules');
  private activeRules = this.state.signal('activeRules');
  mode = this.state.signal('rulesMode');
  filter = this.state.signal('filterRulesQuery');

  visibleRules = computed(() => {
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

  private updateRules(rules: Rule[]) {
    const serializedRules = this.serializer.serializeRules(rules);
    this.state.set('rules', serializedRules);
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
      this.state.get('fadeOutDisabledRules') &&
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
