import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { extractErrorMessage } from '../../util/extract-error-message';

@Component({
  selector: 'app-error',
  templateUrl: './rules-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesErrorComponent {
  private state = inject(GLOBAL_STATE);

  readonly error = computed(() =>
    this.state.rules.raw.status() === 'error'
      ? {
          type: 'fetching' as const,
          error: this.state.rules.raw.error(),
        }
      : this.state.rules.parsed.status() === 'error'
        ? {
            type: 'parsing' as const,
            error: this.state.rules.parsed.error(),
          }
        : { type: 'none' as const },
  );

  readonly errorText = computed(() => {
    const error = this.error();
    if (error.type !== 'none') {
      return extractErrorMessage(error.error);
    } else {
      return undefined;
    }
  });

  readonly rulesMode = this.state.rules.mode;

  constructor() {
    const router = inject(Router);
    effect(() => {
      if (
        !this.state.router.navigationRunning() &&
        this.error().type === 'none'
      ) {
        void router.navigateByUrl(location.hash.substring(1));
      }
    });
  }

  goToRawEditor() {
    this.state.router.go('rules-raw');
  }
}
