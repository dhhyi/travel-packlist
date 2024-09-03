import { Component, input, output } from '@angular/core';
import { VariableType } from '../../../model/types';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  question = input<string | undefined>(undefined);
  value = input<VariableType | undefined>(undefined);
  valueChange = output<VariableType>()

  click(): void {
    this.valueChange.emit(!this.value());
  }
}
