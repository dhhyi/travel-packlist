import { Component, inject, input, OnChanges, output } from '@angular/core';
import { Question } from '../../../model/types';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RulesMode } from '../rules.mode';
import { EditorRuleComponent } from '../editor-rule/editor-rule.component';

@Component({
  selector: 'app-editor-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor-question.component.html',
})
export class EditorQuestionComponent implements OnChanges {
  question = input.required<Question>();

  questionChanged = output<Question>();
  variableChanged = output<[string, string]>();

  control = new FormGroup<{
    [K in keyof Question]: FormControl<string | null>;
  }>({
    question: new FormControl('', [
      Validators.pattern('[^,;#]+'),
      Validators.required,
    ]),
    variable: new FormControl('', [
      Validators.pattern(' *[^ ,;#]+ *'),
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
        tap(() => {
          this.control.markAllAsTouched();
        }),
        debounceTime(500),
        filter(() => this.control.valid),
        takeUntilDestroyed(),
      )
      .subscribe((value) => {
        if (value.question !== this.question().question) {
          this.questionChanged.emit(value as Question);
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
        this.ngOnChanges();
      });
  }

  ngOnChanges() {
    this.control.patchValue(this.question(), { emitEvent: false });
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
