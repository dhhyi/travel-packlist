import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { IconSwapComponent } from '@travel-packlist/icons';
import {
  PleaseSelect,
  Refactor,
  Rule,
  Rules,
  serializeRules,
} from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { EditorRuleComponent } from './editor-rule/editor-rule.component';
import { EditorTitleComponent } from './editor-title/editor-title.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-rules',
  imports: [
    EditorRuleComponent,
    ToolbarComponent,
    IconSwapComponent,
    EditorTitleComponent,
  ],
  templateUrl: './rules.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {
  private refactor = inject(Refactor);

  private state = inject(GLOBAL_STATE);
  private parsedRules = this.state.rules.parsed.value;
  private activeRules = this.state.active.rules;
  private readonly rulesTitle = computed(() => this.parsedRules().title);
  mode = this.state.router.rulesMode;
  accessibility = this.state.config.accessibility;
  filter = this.state.router.filterRulesQuery;

  readonly editable = computed(() => this.state.rules.mode() === 'local');
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

  private updateRules(rules: Rule[], title: string | undefined) {
    (rules as Rules).title = title;
    const serializedRules = serializeRules(rules);
    this.state.localRules.updateRules(serializedRules);
  }

  updateTitle(title: string | undefined) {
    this.updateRules(this.parsedRules(), title);
  }

  updateRule(index: number, rule: Rule) {
    const rules = this.parsedRules();
    rules[index] = rule;
    this.updateRules([...rules], this.rulesTitle());
  }

  deleteRule(index: number) {
    const rules = this.parsedRules();
    rules.splice(index, 1);
    this.updateRules([...rules], this.rulesTitle());
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

    this.updateRules([...rules], this.rulesTitle());

    this.state.router.fragment.set(`rule-${(insertAt || 0).toString()}`);
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

    this.updateRules([...rules], this.rulesTitle());
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

    this.updateRules([...rules], this.rulesTitle());
  }

  goToPacklist() {
    this.state.router.go('packlist');
  }
}
