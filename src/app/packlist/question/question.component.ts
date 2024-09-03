import { Component, effect, input, OnInit, output } from '@angular/core';
import { Question, VariableName, VariableType } from '../../../model/types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  question = input<Question | undefined>(undefined);
  model = input<Record<VariableName, VariableType>>({});

  formControl = new FormControl<boolean>(false);

  modelChange = output<[VariableName, VariableType]>()

  constructor() {
    const valueChanges = toSignal(this.formControl.valueChanges)
    effect(() => {
      const value = valueChanges()
      if (typeof value === 'boolean' && this.question()) {
        const question = this.question()!;
        const modelValue = this.model()[question.variable];
        if (modelValue !== value) {
          this.modelChange.emit([question.variable, value]);
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.question()) {
      const question = this.question()!;
      const model = this.model();
      const value = model[question.variable];
      this.formControl.setValue(value ?? question.defaultValue);
    }
  }

  click(): void {
    this.formControl.setValue(!this.formControl.value);
  }
}
