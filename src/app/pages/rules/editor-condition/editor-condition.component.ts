import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
  TemplateRef,
  viewChild,
  ViewContainerRef,
  effect,
} from '@angular/core';

import { Serializer } from '../../../model/serializer';
import {
  Always,
  And,
  Condition,
  Not,
  Or,
  PleaseSelect,
  Variable,
} from '../../../model/types';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-condition',
  imports: [NgClass],
  templateUrl: './editor-condition.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }
  `,
})
export class EditorConditionComponent {
  condition = input.required<Condition>();
  selectVariables = input.required<string[]>();

  content = viewChild.required('content', { read: ViewContainerRef });

  keywordTemplate = viewChild.required('keyword', { read: TemplateRef });
  variableTemplate = viewChild.required('variable', { read: TemplateRef });
  selectTemplate = viewChild.required('select', { read: TemplateRef });

  private state = inject(GlobalState);
  private activeAnswers = this.state.signal('activeAnswers');
  private mode = this.state.signal('rulesMode');

  highlighVariable = computed(
    () =>
      this.mode() !== 'edit' && this.state.signal('highlightVariableStatus')(),
  );

  private serializer = inject(Serializer);
  serializedCondition = computed(() =>
    this.serializer.serialize(this.condition()),
  );

  please_select = PleaseSelect.string;
  always = Always.string;

  readonly conditionChanged = output<Condition>();

  constructor() {
    effect(() => {
      this.mode();
      this.condition();
      this.selectVariables();
      this.repaint();
    });
  }

  private repaint() {
    this.content().clear();

    if (this.mode() !== 'edit' && this.condition() instanceof Always) {
      return;
    }

    this.paintKeyword('IF');
    this.paintCondition(this.condition(), (newCondition) => {
      if (newCondition) {
        this.conditionChanged.emit(newCondition);
      } else {
        this.conditionChanged.emit(new PleaseSelect());
      }
    });
  }

  private calculateOptions(forbidden: string[]) {
    return [
      this.please_select,
      this.always,
      ...this.selectVariables(),
      'not',
      'and',
      'or',
      'remove',
    ].filter((variable) => !forbidden.includes(variable));
  }

  private createFromPrevious(previous: string): Condition {
    if (previous === this.please_select || previous === this.always) {
      return new PleaseSelect();
    } else {
      return new Variable(previous);
    }
  }

  private selection(value: string, previous: string): Condition | null {
    if (value === 'not') {
      return new Not(this.createFromPrevious(previous));
    } else if (value === 'and') {
      return new And(this.createFromPrevious(previous), new PleaseSelect());
    } else if (value === 'or') {
      return new Or(this.createFromPrevious(previous), new PleaseSelect());
    } else if (value === 'remove') {
      return null;
    } else if (value === this.always) {
      return new Always();
    } else {
      return new Variable(value);
    }
  }

  private paintKeyword(keyword: string) {
    this.content().createEmbeddedView(this.keywordTemplate(), {
      $implicit: keyword,
    });
  }

  private paintSelect(
    variable: string,
    changeCallback: Parameters<EditorConditionComponent['paintCondition']>[1],
    forbidden: string[],
  ) {
    this.content().createEmbeddedView(this.selectTemplate(), {
      $implicit: variable,
      options: this.calculateOptions(forbidden),
      selection: (value: string, previous: string) => {
        changeCallback(this.selection(value, previous));
      },
      width: (variable.length * 9 + 30).toString() + 'px',
    });
  }

  private paintVariable(variable: string) {
    this.content().createEmbeddedView(this.variableTemplate(), {
      $implicit: variable,
    });
  }

  private paintCondition(
    condition: Condition,
    changeCallback: (newCondition: Condition | null) => void,
    forbidden: string[] = [],
  ) {
    if (condition instanceof Not) {
      const forbiddenNot = forbidden.filter((v) => v !== this.always);
      this.paintKeyword('NOT');
      this.paintCondition(
        condition.not,
        (newCondition) => {
          if (newCondition) {
            changeCallback(new Not(newCondition));
          } else {
            changeCallback(null);
          }
        },
        forbiddenNot,
      );
    } else if (condition instanceof And) {
      const forbiddenAnd = [...forbidden, this.always];
      this.paintCondition(
        condition.left,
        (newCondition) => {
          if (newCondition) {
            changeCallback(new And(newCondition, condition.right));
          } else {
            changeCallback(condition.right);
          }
        },
        forbiddenAnd,
      );
      this.paintKeyword('AND');
      this.paintCondition(
        condition.right,
        (newCondition) => {
          if (newCondition) {
            changeCallback(new And(condition.left, newCondition));
          } else {
            changeCallback(condition.left);
          }
        },
        forbiddenAnd,
      );
    } else if (condition instanceof Or) {
      const forbiddenOr = [...forbidden, this.always];
      this.paintCondition(
        condition.left,
        (newCondition) => {
          if (newCondition) {
            changeCallback(new Or(newCondition, condition.right));
          } else {
            changeCallback(condition.right);
          }
        },
        forbiddenOr,
      );
      this.paintKeyword('OR');
      this.paintCondition(
        condition.right,
        (newCondition) => {
          if (newCondition) {
            changeCallback(new Or(condition.left, newCondition));
          } else {
            changeCallback(condition.left);
          }
        },
        forbiddenOr,
      );
    } else if (condition instanceof Variable) {
      if (this.mode() === 'edit') {
        this.paintSelect(condition.variable, changeCallback, forbidden);
      } else {
        this.paintVariable(condition.variable);
      }
    }
  }

  variableActive(variable: string) {
    return this.activeAnswers()[variable];
  }

  variablePlaceholder(variable: string) {
    return variable === this.always || variable === this.please_select
      ? 'x'
      : variable;
  }
}
