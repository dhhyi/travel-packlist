import {
  Component,
  inject,
  input,
  OnChanges,
  output,
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { Always, Question } from '../../../model/types';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  filter,
  map,
  Observable,
  of,
  withLatestFrom,
} from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { EditorRuleComponent } from '../editor-rule/editor-rule.component';
import { NgClass } from '@angular/common';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-question',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './editor-question.component.html',
})
export class EditorQuestionComponent implements OnChanges {
  question = input.required<Question>();

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

  readonly questionChanged = output<Question>();
  readonly variableChanged = output<[string, string]>();

  control = new FormGroup<{
    [K in keyof Question]: FormControl<string | null>;
  }>({
    question: new FormControl('', [
      Validators.pattern('[^,;#]+'),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      Validators.required,
    ]),
    variable: new FormControl(
      '',
      [
        Validators.pattern(' *[^ ,;#]+ *'),
        validateReservedString(),
        // eslint-disable-next-line @typescript-eslint/unbound-method
        Validators.required,
      ],
      [
        validateUnusedVariable(
          toObservable(this.variables),
          toObservable(this.question),
        ),
      ],
    ),
  });

  getControl(name: keyof Question) {
    return this.control.get(name) as FormControl<string>;
  }

  constructor() {
    this.control.valueChanges
      .pipe(
        debounceTime(500),
        filter(() => this.control.valid),
        takeUntilDestroyed(),
      )
      .subscribe((value) => {
        if (
          value.question &&
          value.question !== this.question().question &&
          value.variable
        ) {
          this.questionChanged.emit(
            new Question(value.question, value.variable),
          );
        } else if (
          value.variable &&
          value.variable.trim() !== this.question().variable
        ) {
          this.variableChanged.emit([
            this.question().variable,
            value.variable.trim(),
          ]);
        }
      });

    toObservable(this.mode)
      .pipe(takeUntilDestroyed())
      .subscribe((mode) => {
        if (mode === 'edit') {
          this.control.enable({ emitEvent: false });
        } else {
          this.control.disable({ emitEvent: false });
        }
        this.reset();
      });
  }

  private reset() {
    this.control.patchValue(this.question(), { emitEvent: false });
  }

  ngOnChanges() {
    this.reset();
  }

  focusQuestion() {
    if (
      this.getControl('question').value ===
      EditorRuleComponent.NEW_QUESTION_NAME
    ) {
      this.getControl('question').setValue('', { emitEvent: false });
    }
  }

  focusVariable() {
    if (
      this.getControl('variable').value ===
      EditorRuleComponent.NEW_VARIABLE_NAME
    ) {
      this.getControl('variable').setValue('', { emitEvent: false });
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
      withLatestFrom(variables, question),
      map(([value, variables, question]) =>
        variables
          .filter((v) => v !== question.variable)
          .includes(value?.trim() ?? '')
          ? { used: true }
          : null,
      ),
    );
}
