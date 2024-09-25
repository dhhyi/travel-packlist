import {
  Component,
  inject,
  input,
  OnChanges,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Always, Question } from '../../../model/types';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RulesMode } from '../rules.mode';
import { EditorRuleComponent } from '../editor-rule/editor-rule.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-editor-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor-question.component.html',
})
export class EditorQuestionComponent implements OnChanges {
  question = input.required<Question>();

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
    variable: new FormControl('', [
      Validators.pattern(' *[^ ,;#]+ *'),
      validateReservedString(),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      Validators.required,
    ]),
  });

  getControl(name: keyof Question) {
    return this.control.get(name) as FormControl<string>;
  }

  mode = inject(RulesMode);

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

    this.mode
      .asObservable()
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
