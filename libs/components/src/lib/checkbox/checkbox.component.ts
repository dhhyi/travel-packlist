import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IconHelpComponent } from '@travel-packlist/icons';
import { noop } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cmp-checkbox',
  imports: [FormsModule, IconHelpComponent],
  templateUrl: './checkbox.component.html',
  host: {
    class: 'flex items-center gap-x-2',
    '(click)': 'toggle()',
    '(keypress)': 'toggle()',
    '[attr.aria-checked]': 'model()',
    '[attr.aria-label]': 'label() + (help() ? ". (" + help() + ")" : "")',
    role: 'checkbox',
    tabindex: '0',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly help = input<string>();
  readonly model = signal<boolean | undefined>(undefined);

  private onChange: (newValue: boolean | undefined) => void = noop;
  private onTouched: () => void = noop;

  readonly helpVisible = signal(false);

  constructor() {
    effect(() => {
      this.onChange(this.model());
      this.onTouched();
    });
  }

  toggleHelp(event: Event) {
    event.stopPropagation();
    this.helpVisible.update((value) => !value);
  }

  toggle() {
    this.model.update((value) => !value);
  }

  writeValue(obj: boolean): void {
    this.model.set(obj);
  }

  registerOnChange(fn: CheckboxComponent['onChange']): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: CheckboxComponent['onTouched']): void {
    this.onTouched = fn;
  }
}
