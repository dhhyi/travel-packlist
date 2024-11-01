import {
  Component,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';
import { Parser } from '../../model/parser';
import { PersistentState } from '../../state/persistent-state';

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
  templateUrl: './edit-rules-raw.component.html',
  styles: `
    :host {
      @apply flex flex-col;
    }
  `,
})
export class EditRulesRawComponent {
  private state = inject(PersistentState);
  private rulesFromState = this.state.signal('rules');

  private parser = inject(Parser);

  rulesControl = new FormControl(this.state.get('rules'));
  private rulesText = toSignal(
    this.rulesControl.valueChanges.pipe(startWith(this.rulesControl.value)),
  );
  private rulesPending = computed(() => {
    return this.rulesText() !== this.rulesFromState();
  });

  parserState = computed<ParserState>(() => {
    if (this.rulesPending()) {
      return { type: 'pending' };
    } else {
      try {
        const parsed = this.parser.parseRules(this.rulesFromState());
        return { type: 'success', rules: parsed.length };
      } catch (error) {
        if (error instanceof Error) {
          return { type: 'error', error: error.message };
        } else {
          console.error(error);
          return { type: 'error', error: 'Unknown error' };
        }
      }
    }
  });

  constructor() {
    this.rulesControl.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed())
      .subscribe((value) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.state.set('rules', value!);
      });
  }
}
