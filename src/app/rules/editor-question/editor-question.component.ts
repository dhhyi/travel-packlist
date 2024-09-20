import { Component, inject, input, OnChanges, output } from '@angular/core';
import { Question } from '../../../model/types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RulesMode } from '../rules.mode';

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
    question: new FormControl(''),
    variable: new FormControl(''),
  });

  mode = inject(RulesMode);

  constructor() {
    this.control.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed())
      .subscribe((value) => {
        if (value.question !== this.question().question) {
          this.questionChanged.emit(value as Question);
        } else if (
          !!value.variable &&
          value.variable !== this.question().variable
        ) {
          this.variableChanged.emit([this.question().variable, value.variable]);
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
      });
  }

  ngOnChanges() {
    this.control.patchValue(this.question(), { emitEvent: false });
  }
}
