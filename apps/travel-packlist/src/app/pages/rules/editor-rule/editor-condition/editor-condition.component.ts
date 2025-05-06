import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  Always,
  And,
  Condition,
  Not,
  Or,
  PleaseSelect,
  Variable,
} from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

export const NOT = 'NOT';
export const AND = 'AND';
export const OR = 'OR';
export const REMOVE = 'REMOVE';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-condition',
  templateUrl: './editor-condition.component.html',
  host: {
    class: 'flex flex-row flex-wrap items-center justify-start gap-2',
  },
})
export class EditorConditionComponent {
  readonly condition = input.required<Condition>();
  readonly selectVariables = input.required<string[]>();

  readonly content = viewChild.required('content', { read: ViewContainerRef });

  private readonly keywordTemplate = viewChild.required('keyword', {
    read: TemplateRef,
  });
  private readonly variableTemplate = viewChild.required('variable', {
    read: TemplateRef,
  });
  private readonly selectTemplate = viewChild.required('select', {
    read: TemplateRef,
  });

  private state = inject(GLOBAL_STATE);
  private activeAnswers = this.state.active.answers;
  private mode = this.state.router.rulesMode;

  readonly highlighVariable = computed(
    () => this.mode() !== 'edit' && this.state.config.highlightVariableStatus(),
  );

  private ALWAYS = Always.string;
  PLEASE_SELECT = PleaseSelect.string;
  NOT = NOT;
  AND = AND;
  OR = OR;
  REMOVE = REMOVE;

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
      this.PLEASE_SELECT,
      this.ALWAYS,
      ...this.selectVariables(),
      this.NOT,
      this.AND,
      this.OR,
      this.REMOVE,
    ].filter((variable) => !forbidden.includes(variable));
  }

  private createFromPrevious(previous: string): Condition {
    if (previous === this.PLEASE_SELECT || previous === this.ALWAYS) {
      return new PleaseSelect();
    } else {
      return new Variable(previous);
    }
  }

  private selection(value: string, previous: string): Condition | null {
    if (value === this.NOT) {
      return new Not(this.createFromPrevious(previous));
    } else if (value === this.AND) {
      return new And(this.createFromPrevious(previous), new PleaseSelect());
    } else if (value === this.OR) {
      return new Or(this.createFromPrevious(previous), new PleaseSelect());
    } else if (value === this.REMOVE) {
      return null;
    } else if (value === this.ALWAYS) {
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
      const forbiddenNot = forbidden.filter((v) => v !== this.ALWAYS);
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
      const forbiddenAnd = [...forbidden, this.ALWAYS];
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
      const forbiddenOr = [...forbidden, this.ALWAYS];
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
    return variable === this.ALWAYS || variable === this.PLEASE_SELECT
      ? 'x'
      : variable;
  }
}
