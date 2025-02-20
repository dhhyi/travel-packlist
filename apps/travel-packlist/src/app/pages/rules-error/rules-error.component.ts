import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-error',
  templateUrl: './rules-error.component.html',
})
export class RulesErrorComponent {
  readonly error = input<string>();

  private state = inject(GLOBAL_STATE);

  rulesMode = this.state.rules.mode;

  goToRawEditor() {
    this.state.router.go('rules-raw');
  }
}
