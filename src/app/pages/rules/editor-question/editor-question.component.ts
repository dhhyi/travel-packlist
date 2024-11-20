import {
  Component,
  inject,
  output,
  ChangeDetectionStrategy,
  computed,
  effect,
  model,
} from '@angular/core';
import { Always, Question } from '../../../model/types';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  filter,
  iif,
  map,
  Observable,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-question',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './editor-question.component.html',
})
export class EditorQuestionComponent {
  question = model.required<Question>();

  private state = inject(GlobalState);
  private variables = this.state.signal('variables');
  mode = this.state.signal('rulesMode');

  highlighVariable = computed(
    () =>
      this.mode() !== 'edit' && this.state.signal('highlightVariableStatus')(),
  );
  variableActive = computed(
    () => this.state.signal('activeAnswers')()[this.question().variable],
  );
  private refactorVariables = this.state.signal('refactorVariables');

  readonly variableChanged = output<[string, string]>();

  private fb = inject(FormBuilder).nonNullable;
  form = this.fb.group({
    question: this.fb.control('', {
      validators: [
        Validators.pattern('[^,;#]+'),
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
      ],
    }),
    variable: this.fb.control('', {
      validators: [
        Validators.pattern(' *[^ ,;#]+ *'),
        validateReservedString(),
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
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
      this.form.valueChanges.pipe(
        debounceTime(500),
        filter(() => this.form.valid),
      ),
    );
    effect(() => {
      const value = validFormUpdates();
      if (
        value?.question &&
        value.question !== this.question().question &&
        value.variable
      ) {
        this.question.set(new Question(value.question, value.variable));
      } else if (
        value?.variable &&
        value.variable.trim() !== this.question().variable
      ) {
        if (
          this.question().variable === Question.NEW_VARIABLE_NAME ||
          !this.refactorVariables()
        ) {
          this.question.set(
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
}

function validateReservedString(): ValidatorFn {
  return (control: AbstractControl<string | null>) => {
    if ([Always.string].some((v) => v === control.value?.trim())) {
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
