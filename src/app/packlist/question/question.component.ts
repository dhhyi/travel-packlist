import { Component, computed, input, OnInit, output } from '@angular/core';
import { Question, VariableName, VariableType } from '../../../model/types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  question = input<Question | undefined>(undefined);

  formControl = new FormControl<boolean>(false);

  modelChange = output<[VariableName, VariableType]>()

  constructor() {
    this.formControl.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      if (value !== null && this.question()) {
        const question = this.question()!;
        this.modelChange.emit([question.variable, value]);
      }
    });
  }

  ngOnInit(): void {
    if (this.question()) {
      const question = this.question()!;
      this.formControl.setValue(question.defaultValue);
    }
  }

  click(): void {
    this.formControl.setValue(!this.formControl.value);
  }
}
