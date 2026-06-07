import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  effect,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

import { SelectOption } from './select-option';

@Component({
  selector: 'cmp-select-options',
  imports: [NgTemplateOutlet],
  templateUrl: './select-options.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => SelectOptions),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOptions<T extends string> implements ControlValueAccessor {
  readonly label = input('');
  readonly legendHidden = input(false);
  readonly fieldSetClass = input('');
  readonly model = signal<T | undefined>(undefined);
  readonly children = contentChildren(SelectOption<T>);

  private onChanged: (value: T | undefined) => void = noop;
  private onTouched: () => void = noop;

  constructor() {
    effect(() => {
      if (this.model()) {
        this.onChanged(this.model());
        this.onTouched();
      }
    });
  }

  template(option: T) {
    const template = this.children().find((child) => child.value() === option);
    if (!template) {
      throw new Error(`No template found for option: ${option}`);
    }
    return template.template;
  }

  writeValue(value: T) {
    // this soft equal is intentional to avoid triggering on falsy values
    // eslint-disable-next-line eqeqeq
    if (value == this.model()) {
      return;
    }
    this.model.set(value);
  }

  registerOnChange(fn: SelectOptions<T>['onChanged']): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: SelectOptions<T>['onTouched']): void {
    this.onTouched = fn;
  }
}
