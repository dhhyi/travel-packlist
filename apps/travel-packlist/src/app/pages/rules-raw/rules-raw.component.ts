import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { debounce, disabled, form, FormField } from '@angular/forms/signals';
import { Rules } from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { extractErrorMessage } from '../../util/extract-error-message';

type ParserState =
  | {
      type: 'pending';
    }
  | {
      type: 'success';
      rules: number;
    }
  | {
      type: 'warnings';
      warnings: Rules['warnings'];
    }
  | {
      type: 'error';
      error: string;
    };

@Component({
  selector: 'app-edit-rules-raw',
  imports: [FormField],
  templateUrl: './rules-raw.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex grow flex-col',
  },
})
export class EditRulesRawComponent {
  private state = inject(GLOBAL_STATE);

  protected readonly pending = signal(false);
  private readonly rulesModel = signal(this.state.rules.raw.value() ?? '');
  rulesControl = form(this.rulesModel, (path) => {
    debounce(path, 500);
    disabled(path, () => this.state.rules.mode() !== 'local');
  });

  readonly parserState = computed<ParserState>(() => {
    if (this.pending()) {
      return { type: 'pending' };
    } else {
      if (this.state.rules.parsed.status() === 'error') {
        return {
          type: 'error',
          error: extractErrorMessage(this.state.rules.parsed.error()),
        };
      } else {
        if (this.state.rules.parsed.value().warnings?.length) {
          return {
            type: 'warnings',
            warnings: this.state.rules.parsed.value().warnings,
          };
        }
        return {
          type: 'success',
          rules: this.state.rules.parsed.value().length,
        };
      }
    }
  });

  constructor() {
    effect(() => {
      const value = this.rulesModel();
      if (value && value !== this.state.rules.raw.value()) {
        this.state.localRules.updateRules(value);
        this.pending.set(false);
      }
    });
  }
}
