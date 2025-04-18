import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  ResourceStatus,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { extractErrorMessage } from '../../util/extract-error-message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-error',
  templateUrl: './rules-error.component.html',
})
export class RulesErrorComponent {
  private state = inject(GLOBAL_STATE);

  readonly error = computed<{ type: 'parsing' | 'fetching'; message: unknown }>(
    () =>
      this.state.rules.raw.status() === ResourceStatus.Error
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
