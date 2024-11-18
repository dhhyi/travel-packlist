import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';
import { GlobalState } from '../../state/global-state';

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
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rules-raw.component.html',
  styles: `
    :host {
      @apply flex flex-col;
    }
  `,
})
export class EditRulesRawComponent {
  private state = inject(GlobalState);

  private fb = inject(FormBuilder).nonNullable;
  rulesControl = this.fb.control(this.state.get('rulesOrTemplate'));
  private rulesText = toSignal(
    this.rulesControl.valueChanges.pipe(startWith(this.rulesControl.value)),
  );
  private rulesPending = computed(() => {
    return this.rulesText() !== this.state.signal('rulesOrTemplate')();
  });

  parserState = computed<ParserState>(() => {
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
    this.rulesControl.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed())
      .subscribe((value) => {
        this.state.set('rules', value);
      });
  }
}
