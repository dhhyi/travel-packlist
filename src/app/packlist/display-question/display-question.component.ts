import { Component, input, output } from '@angular/core';
import { VariableType } from '../../../model/types';

@Component({
  selector: 'app-display-question',
  standalone: true,
  templateUrl: './display-question.component.html',
  styleUrl: './display-question.component.css',
})
export class DisplayQuestionComponent {
  question = input<string | undefined>(undefined);
  value = input<VariableType | undefined>(undefined);
  valueChange = output<VariableType>();

  click(): void {
    this.valueChange.emit(!this.value());
  }
}
