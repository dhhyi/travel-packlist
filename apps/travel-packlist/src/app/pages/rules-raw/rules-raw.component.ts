import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
  effect,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GlobalState } from '@travel-packlist/state';
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
export default class EditRulesRawComponent {
  private state = inject(GlobalState);

  private fb = inject(FormBuilder).nonNullable;
  rulesControl = this.fb.control(this.state.get('rulesOrTemplate'));
  private readonly rulesText = toSignal(
    this.rulesControl.valueChanges.pipe(startWith(this.rulesControl.value)),
  );
  private readonly rulesPending = computed(() => {
    return this.rulesText() !== this.state.signal('rulesOrTemplate')();
  });

  readonly parserState = computed<ParserState>(() => {
    if (this.rulesPending()) {
      return { type: 'pending' };
    } else {
      const parserError = this.state.signal('ruleParserError');
      if (parserError()) {
        return { type: 'error', error: parserError() };
      } else {
        return {
          type: 'success',
          rules: this.state.signal('parsedRules')().length,
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
      if (value) {
        this.state.set('rules', value);
      }
    });
  }
}
