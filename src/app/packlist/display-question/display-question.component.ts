import { Component, inject, input, output } from '@angular/core';
import { VariableType } from '../../../model/types';
import { IconCheckmarkComponent } from '../../icons/icon-checkmark/icon-checkmark.component';
import { ConfigPersistence } from '../../config/config.persistence';

@Component({
  selector: 'app-display-question',
  standalone: true,
  templateUrl: './display-question.component.html',
  imports: [IconCheckmarkComponent],
})
export class DisplayQuestionComponent {
  question = input<string | undefined>(undefined);
  value = input<VariableType | undefined>(undefined);
  valueChange = output<VariableType>();

  private config = inject(ConfigPersistence);

  isLocked(): boolean {
    return this.config.isAnswersLocked();
  }

  click(): void {
    if (!this.isLocked()) {
      this.valueChange.emit(!this.value());
    }
  }
}
