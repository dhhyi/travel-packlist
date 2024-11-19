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
import {
  Always,
  And,
  Condition,
  Not,
  Or,
  PleaseSelect,
  Variable,
} from '../../../model/types';
import { NgClass } from '@angular/common';
import { Serializer } from '../../../model/serializer';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-condition',
  standalone: true,
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
    effect(
      () => {
        this.mode();
        this.condition();
        this.selectVariables();
        this.repaint();
      },
      { allowSignalWrites: true },
    );
  }

  private repaint() {
    this.content().clear();

    if (this.mode() !== 'edit' && this.condition() instanceof Always) {
      return;
    }

    this.paintKeyword('IF');
    this.paintCondition(this.condition(), (newCondition) => {
      this.conditionChanged.emit(newCondition);
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
    ].filter((variable) => !forbidden.includes(variable));
  }

  private selection(value: string): Condition {
    if (value === 'not') {
      return new Not(new PleaseSelect());
    } else if (value === 'and') {
      return new And(new PleaseSelect(), new PleaseSelect());
    } else if (value === 'or') {
      return new Or(new PleaseSelect(), new PleaseSelect());
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
    changeCallback: (newCondition: Condition) => void,
    forbidden: string[],
  ) {
    this.content().createEmbeddedView(this.selectTemplate(), {
      $implicit: variable,
      options: this.calculateOptions(forbidden),
      selection: (value: string) => {
        changeCallback(this.selection(value));
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
    changeCallback: (newCondition: Condition) => void,
    forbidden: string[] = [],
  ) {
    if (condition instanceof Not) {
      const forbiddenNot = forbidden.filter((v) => v !== this.always);
      this.paintKeyword('NOT');
      this.paintCondition(
        condition.not,
        (newCondition: Condition) => {
          changeCallback(new Not(newCondition));
        },
        forbiddenNot,
      );
    } else if (condition instanceof And) {
      const forbiddenAnd = [...forbidden, this.always];
      this.paintCondition(
        condition.left,
        (newCondition: Condition) => {
          changeCallback(new And(newCondition, condition.right));
        },
        forbiddenAnd,
      );
      this.paintKeyword('AND');
      this.paintCondition(
        condition.right,
        (newCondition: Condition) => {
          changeCallback(new And(condition.left, newCondition));
        },
        forbiddenAnd,
      );
    } else if (condition instanceof Or) {
      const forbiddenOr = [...forbidden, this.always];
      this.paintCondition(
        condition.left,
        (newCondition: Condition) => {
          changeCallback(new Or(newCondition, condition.right));
        },
        forbiddenOr,
      );
      this.paintKeyword('OR');
      this.paintCondition(
        condition.right,
        (newCondition: Condition) => {
          changeCallback(new Or(condition.left, newCondition));
        },
        forbiddenOr,
      );
    } else if (condition instanceof Always) {
      if (this.mode() === 'edit') {
        this.paintSelect(this.always, changeCallback, forbidden);
      } else {
        this.paintVariable(this.always);
      }
    } else if (condition instanceof Variable) {
      if (this.mode() === 'edit') {
        this.paintSelect(condition.variable, changeCallback, forbidden);
      } else {
        this.paintVariable(condition.variable);
      }
    }
  }

  variableActive(variable: string) {
    return variable === Always.string || this.activeAnswers()[variable];
  }
}
