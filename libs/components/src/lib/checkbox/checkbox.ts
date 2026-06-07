import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconHelp } from '@travel-packlist/icons';
import { noop } from 'rxjs';

@Component({
  selector: 'cmp-checkbox',
  imports: [IconHelp],
  templateUrl: './checkbox.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => Checkbox),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center gap-x-2',
    '(click)': 'toggle()',
    '(keypress)': 'toggle()',
    '[attr.aria-checked]': 'model()',
    '[attr.aria-label]': 'label() + (help() ? ". (" + help() + ")" : "")',
    role: 'checkbox',
    tabindex: '0',
  },
})
export class Checkbox implements ControlValueAccessor {
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

  registerOnChange(fn: Checkbox['onChange']): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Checkbox['onTouched']): void {
    this.onTouched = fn;
  }
}
