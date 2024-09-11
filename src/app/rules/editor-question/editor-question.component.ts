import { Component, input, OnChanges, output } from '@angular/core';
import { Question } from '../../../model/types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-editor-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor-question.component.html',
  styleUrl: './editor-question.component.css',
})
export class EditorQuestionComponent implements OnChanges {
  question = input.required<Question>();

  questionChanged = output<Question>();

  control = new FormGroup<{
    [K in keyof Question]: FormControl<string | null>;
  }>({
    question: new FormControl(''),
    variable: new FormControl(''),
  });

  constructor() {
    this.control.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed())
      .subscribe((question) => {
        this.questionChanged.emit(question as Question);
      });
  }

  ngOnChanges() {
    this.control.patchValue(this.question(), { emitEvent: false });
  }
}
