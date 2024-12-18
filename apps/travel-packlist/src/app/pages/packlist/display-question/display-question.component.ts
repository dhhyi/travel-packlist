import {
  Component,
  inject,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IconCheckmarkComponent } from '@travel-packlist/icons';
import { VariableType } from '@travel-packlist/model';
import { GlobalState } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  imports: [IconCheckmarkComponent],
})
export class DisplayQuestionComponent {
  readonly question = input<string | undefined>(undefined);
  readonly value = input<VariableType | undefined>(undefined);
  readonly valueChange = output<VariableType>();

  private state = inject(GlobalState);

  click(): void {
    if (!this.state.get('answersLocked')) {
      this.valueChange.emit(!this.value());
    }
  }
}
