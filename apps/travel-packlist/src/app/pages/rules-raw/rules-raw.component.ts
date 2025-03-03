import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { debounceTime, startWith } from 'rxjs';

type ParserState =
  | {
      type: 'pending';
    }
  | {
      type: 'success';
      rules: number;
    }
  | {
      type: 'error';
      error: string;
    };

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-rules-raw',
  imports: [ReactiveFormsModule],
  templateUrl: './rules-raw.component.html',
  styles: `
    :host {
      @apply flex grow flex-col;
    }
  `,
})
export class EditRulesRawComponent {
  private state = inject(GLOBAL_STATE);

  private fb = inject(FormBuilder).nonNullable;
  rulesControl = this.fb.control(this.state.rules.raw());
  private readonly rulesText = toSignal(
    this.rulesControl.valueChanges.pipe(startWith(this.rulesControl.value)),
  );
  private readonly rulesPending = computed(
    () => this.rulesText() !== this.state.rules.raw(),
  );

  readonly parserState = computed<ParserState>(() => {
    if (this.rulesPending()) {
      return { type: 'pending' };
    } else {
      const parserError = this.state.rules.parserError;
      if (parserError()) {
        return { type: 'error', error: parserError() };
      } else {
        return {
          type: 'success',
          rules: this.state.rules.parsed().length,
        };
      }
    }
  });

  constructor() {
    const ruleUpdates = toSignal(
      this.rulesControl.valueChanges.pipe(debounceTime(500)),
    );
    effect(() => {
      const value = ruleUpdates();
      if (typeof value === 'string' && value !== this.state.rules.raw()) {
        this.state.localRules.updateRules(value);
      }
    });
    effect(() => {
      const editable = this.state.rules.mode() === 'local';
      if (!editable) {
        this.rulesControl.disable();
      } else {
        this.rulesControl.enable();
      }
    });
  }
}
