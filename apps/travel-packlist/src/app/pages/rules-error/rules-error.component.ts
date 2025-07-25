import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { extractErrorMessage } from '../../util/extract-error-message';

@Component({
  selector: 'app-error',
  templateUrl: './rules-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesErrorComponent {
  private state = inject(GLOBAL_STATE);

  readonly error = computed<{ type: 'parsing' | 'fetching'; message: unknown }>(
    () =>
      this.state.rules.raw.status() === 'error'
        ? {
            type: 'fetching',
            message: extractErrorMessage(this.state.rules.raw.error()),
          }
        : {
            type: 'parsing',
            message: extractErrorMessage(this.state.rules.parsed.error()),
          },
  );

  readonly rulesMode = this.state.rules.mode;

  goToRawEditor() {
    this.state.router.go('rules-raw');
  }
}
