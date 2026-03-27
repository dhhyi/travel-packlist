import { SlicePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import {
  debounce,
  disabled,
  FieldValidator,
  form,
  FormField,
  required,
  validate,
} from '@angular/forms/signals';
import { IconArrowForwardComponent } from '@travel-packlist/icons';
import { Parser, SyntaxError } from '@travel-packlist/model';
import { Always, Question } from '@travel-packlist/rules';
import { GLOBAL_STATE } from '@travel-packlist/state';

import {
  AND,
  NOT,
  OR,
  REMOVE,
} from '../editor-condition/editor-condition.component';

@Component({
  selector: 'app-editor-question',
  imports: [IconArrowForwardComponent, FormField, SlicePipe],
  templateUrl: './editor-question.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorQuestionComponent {
  readonly question = input.required<Question>();

  private parser = inject(Parser);

  private state = inject(GLOBAL_STATE);
  mode = this.state.router.rulesMode;

  readonly highlighVariable = computed(
    () => this.mode() !== 'edit' && this.state.config.highlightVariableStatus(),
  );
  readonly variableActive = computed(
    () => this.state.active.answers()[this.question().variable],
  );
  private refactorVariables = this.state.config.refactorVariables;
  readonly warnings = computed(() =>
    this.state.rules.parsed.hasValue()
      ? (this.state.rules.parsed.value().warnings ?? []).filter(
          (warning) => warning.variable === this.question().variable,
        )
      : [],
  );

  readonly questionChanged = output<Question>();
  readonly variableChanged = output<[string, string]>();

  private readonly formModel = linkedSignal<
    Pick<Question, 'question' | 'variable'>
  >(() => ({
    question: this.question().question,
    variable: this.question().variable,
  }));
  readonly form = form(this.formModel, (path) => {
    disabled(path, () => this.mode() !== 'edit');
    validate(path.question, this.validateQuestionPattern());
    required(path.question);
    validate(path.variable, this.validateVariablePattern());
    validate(path.variable, validateReservedString());
    required(path.variable);
    debounce(path, 500);
  });

  constructor() {
    effect(() => {
      if (this.form().valid()) {
        const model = this.formModel();
        const q = model.question.trim();
        const v = model.variable.trim();
        if (q && q !== this.question().question && v) {
          this.questionChanged.emit(new Question(q, v));
        } else if (v && v !== this.question().variable) {
          const isDuplicate = this.warnings().some(
            (warning) => warning.type === 'duplicate',
          );
          if (
            this.question().variable === Question.NEW_VARIABLE_NAME ||
            !this.refactorVariables() ||
            isDuplicate
          ) {
            this.questionChanged.emit(
              new Question(this.question().question, v),
            );
          } else {
            this.variableChanged.emit([this.question().variable, v]);
          }
        }
      }
    });
  }

  focusQuestion() {
    if (this.formModel().question === Question.NEW_QUESTION_NAME) {
      this.formModel.update((model) => ({ ...model, question: '' }));
    }
  }

  focusVariable() {
    if (this.formModel().variable === Question.NEW_VARIABLE_NAME) {
      this.formModel.update((model) => ({ ...model, variable: '' }));
    }
  }

  private validateVariablePattern(): FieldValidator<string> {
    return (ctx) => {
      const value = ctx.value().trim();
      try {
        this.parser.validateVariableName(value);
        return null;
      } catch (error) {
        if (error instanceof SyntaxError && typeof error.found === 'string') {
          return { kind: 'pattern', message: error.found };
        }
        return { kind: 'pattern' };
      }
    };
  }

  private validateQuestionPattern(): FieldValidator<string> {
    return (ctx) => {
      const value = ctx.value().trim();
      try {
        this.parser.validateQuestionString(value);
        return null;
      } catch (error) {
        if (error instanceof SyntaxError && typeof error.found === 'string') {
          return { kind: 'pattern', message: error.found };
        }
        return { kind: 'pattern' };
      }
    };
  }
}

function validateReservedString(): FieldValidator<string> {
  return (ctx) => {
    if (
      [Always.string, NOT, AND, OR, REMOVE].some(
        (v) => v === ctx.value().trim(),
      )
    ) {
      return { kind: 'reserved' };
    }
    return null;
  };
}
