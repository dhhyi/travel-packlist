import {
  Component,
  computed,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnChanges,
} from '@angular/core';
import {
  Always,
  And,
  Condition,
  Not,
  Or,
  PleaseSelect,
  Variable,
} from '../../model/types';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RulesMode } from '../../state/rules.mode';
import { Serializer } from '../../model/serializer';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GlobalState } from '../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-condition',
  standalone: true,
  imports: [NgTemplateOutlet, NgClass],
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
export class EditorConditionComponent implements AfterViewInit, OnChanges {
  condition = input.required<Condition>();

  @ViewChild('content', { read: ViewContainerRef }) content!: ViewContainerRef;

  @ViewChild('keyword') keywordTemplate!: TemplateRef<unknown>;
  @ViewChild('variable') variableTemplate!: TemplateRef<unknown>;
  @ViewChild('select') selectTemplate!: TemplateRef<unknown>;

  private mode = inject(RulesMode);
  private state = inject(GlobalState);
  private variables = this.state.signal('variables');
  private answers = this.state.signal('answers');

  highlighVariable = computed(
    () =>
      !this.mode.isMode('edit') &&
      this.state.signal('highlightVariableStatus')(),
  );

  private serializer = inject(Serializer);
  serializedCondition = computed(() =>
    this.serializer.serialize(this.condition()),
  );

  please_select = PleaseSelect.string;
  always = Always.string;

  readonly conditionChanged = output<Condition>();

  constructor() {
    this.mode
      .asObservable()
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.repaint();
      });
  }

  private repaint() {
    this.content.clear();

    if (!this.mode.isMode('edit') && this.condition() instanceof Always) {
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
      ...this.variables(),
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
    this.content.createEmbeddedView(this.keywordTemplate, {
      $implicit: keyword,
    });
  }

  private paintSelect(
    variable: string,
    changeCallback: (newCondition: Condition) => void,
    forbidden: string[],
  ) {
    this.content.createEmbeddedView(this.selectTemplate, {
      $implicit: variable,
      options: this.calculateOptions(forbidden),
      selection: (value: string) => {
        changeCallback(this.selection(value));
      },
      width: (variable.length * 9 + 30).toString() + 'px',
    });
  }

  private paintVariable(variable: string) {
    this.content.createEmbeddedView(this.variableTemplate, {
      $implicit: variable,
    });
  }

  private paintCondition(
    condition: Condition,
    changeCallback: (newCondition: Condition) => void,
    forbidden: string[] = [],
  ) {
    if (condition instanceof Not) {
      const forbiddenNot = [...forbidden, this.always, 'not', 'and', 'or'];
      this.paintKeyword('NOT');
      this.paintCondition(
        condition.not,
        (newCondition: Condition) => {
          changeCallback(new Not(newCondition));
        },
        forbiddenNot,
      );
    } else if (condition instanceof And) {
      const forbiddenAnd = [...forbidden, this.always, 'or'];
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
      if (this.mode.isMode('edit')) {
        this.paintSelect(this.always, changeCallback, forbidden);
      } else {
        this.paintVariable(this.always);
      }
    } else if (condition instanceof Variable) {
      if (this.mode.isMode('edit')) {
        this.paintSelect(condition.variable, changeCallback, forbidden);
      } else {
        this.paintVariable(condition.variable);
      }
    }
  }

  ngOnChanges(): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this.content) this.repaint();
  }

  ngAfterViewInit(): void {
    this.repaint();
  }

  variableActive(variable: string) {
    return variable === Always.string || this.answers()[variable];
  }
}
