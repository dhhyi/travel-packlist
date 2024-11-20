import {
  Component,
  inject,
  input,
  ChangeDetectionStrategy,
  model,
} from '@angular/core';
import { VariableType } from '../../../model/types';
import { IconCheckmarkComponent } from '../../../icons/icon-checkmark/icon-checkmark.component';
import { GlobalState } from '../../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  imports: [IconCheckmarkComponent],
})
export class DisplayQuestionComponent {
  question = input.required<string>();
  value = model.required<VariableType>();

  private state = inject(GlobalState);

  click(): void {
    if (!this.state.get('answersLocked')) {
      this.value.update((v) => !v);
    }
  }
}
