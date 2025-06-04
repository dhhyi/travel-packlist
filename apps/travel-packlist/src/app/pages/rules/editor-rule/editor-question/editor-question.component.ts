import {
  Component,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
  computed,
  effect,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IconArrowForwardComponent } from '@travel-packlist/icons';
import { SyntaxError, Parser, Always, Question } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';
import {
  filter,
  iif,
  map,
  Observable,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';

import {
  AND,
  NOT,
  OR,
  REMOVE,
} from '../editor-condition/editor-condition.component';

@Component({
  selector: 'app-editor-question',
  imports: [ReactiveFormsModule, IconArrowForwardComponent],
  templateUrl: './editor-question.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorQuestionComponent {
  readonly question = input.required<Question>();

  private parser = inject(Parser);

  private state = inject(GLOBAL_STATE);
  private variables = this.state.rules.variables;
  mode = this.state.router.rulesMode;

  readonly highlighVariable = computed(
    () => this.mode() !== 'edit' && this.state.config.highlightVariableStatus(),
  );
  readonly variableActive = computed(
    () => this.state.active.answers()[this.question().variable],
  );
  private refactorVariables = this.state.config.refactorVariables;

  readonly questionChanged = output<Question>();
  readonly variableChanged = output<[string, string]>();

  private fb = inject(FormBuilder).nonNullable;
  form = this.fb.group({
    question: this.fb.control('', {
      validators: [
        this.validateQuestionPattern(),
        Validators.required.bind(this),
      ],
    }),
    variable: this.fb.control('', {
      validators: [
        this.validateVariablePattern(),
        validateReservedString(),
        Validators.required.bind(this),
      ],
      asyncValidators: [
        validateUnusedVariable(
          toObservable(this.variables),
          toObservable(this.question),
        ),
      ],
    }),
  });

  constructor() {
    effect(() => {
      this.question();
      this.reset();
    });

    const validFormUpdates = toSignal(
      this.form.valueChanges.pipe(filter(() => this.form.valid)),
    );
    effect(() => {
      const value = validFormUpdates();
      if (
        value?.question &&
        value.question !== this.question().question &&
        value.variable
      ) {
        this.questionChanged.emit(new Question(value.question, value.variable));
      } else if (
        value?.variable &&
        value.variable.trim() !== this.question().variable
      ) {
        if (
          this.question().variable === Question.NEW_VARIABLE_NAME ||
          !this.refactorVariables()
        ) {
          this.questionChanged.emit(
            new Question(this.question().question, value.variable.trim()),
          );
        } else {
          this.variableChanged.emit([
            this.question().variable,
            value.variable.trim(),
          ]);
        }
      }
    });

    effect(() => {
      if (this.mode() === 'edit') {
        this.form.enable({ emitEvent: false });
      } else {
        this.form.disable({ emitEvent: false });
      }
      this.reset();
    });
  }

  private reset() {
    this.form.patchValue(this.question(), { emitEvent: false });
  }

  focusQuestion() {
    if (this.form.controls.question.value === Question.NEW_QUESTION_NAME) {
      this.form.controls.question.setValue('', { emitEvent: false });
    }
  }

  focusVariable() {
    if (this.form.controls.variable.value === Question.NEW_VARIABLE_NAME) {
      this.form.controls.variable.setValue('', { emitEvent: false });
    }
  }

  private validateVariablePattern(): ValidatorFn {
    return (control: AbstractControl<string | null>) => {
      const value = control.value?.trim() ?? '';
      try {
        this.parser.validateVariableName(value);
        return null;
      } catch (error) {
        if (error instanceof SyntaxError) {
          return { pattern: error.found };
        }
        return { pattern: true };
      }
    };
  }

  private validateQuestionPattern(): ValidatorFn {
    return (control: AbstractControl<string | null>) => {
      const value = control.value?.trim() ?? '';
      try {
        this.parser.validateQuestionString(value);
        return null;
      } catch (error) {
        if (error instanceof SyntaxError) {
          return { pattern: error.found };
        }
        return { pattern: true };
      }
    };
  }
}

function validateReservedString(): ValidatorFn {
  return (control: AbstractControl<string | null>) => {
    if (
      [Always.string, NOT, AND, OR, REMOVE].some(
        (v) => v === control.value?.trim(),
      )
    ) {
      return { reserved: true };
    }
    return null;
  };
}

function validateUnusedVariable(
  variables: Observable<string[]>,
  question: Observable<Question>,
): AsyncValidatorFn {
  return (control: AbstractControl<string | null>) =>
    of(control.value).pipe(
      withLatestFrom(variables.pipe(map((arr) => [...arr])), question),
      switchMap(([value, variables, question]) =>
        iif(
          () => !variables.find((v) => v === question.variable),
          of(null),
          of([value, variables, question] as const).pipe(
            map(([value, variables, question]) => {
              const used = variables.findIndex((v) => v === question.variable);
              variables.splice(used, 1);
              return variables.includes(value?.trim() ?? '')
                ? { used: true }
                : null;
            }),
          ),
        ),
      ),
    );
}
