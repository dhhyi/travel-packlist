import {
  Component,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { VariableType } from '../../model/types';
import { IconCheckmarkComponent } from '../../icons/icon-checkmark/icon-checkmark.component';
import { GlobalState } from '../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-question',
  standalone: true,
  templateUrl: './display-question.component.html',
  imports: [IconCheckmarkComponent],
})
export class DisplayQuestionComponent {
  question = input<string | undefined>(undefined);
  value = input<VariableType | undefined>(undefined);
  readonly valueChange = output<VariableType>();

  private state = inject(GlobalState);

  click(): void {
    if (!this.state.get('answersLocked')) {
      this.valueChange.emit(!this.value());
    }
  }
}
