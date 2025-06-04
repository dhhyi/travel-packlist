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

import { SelectOptionDirective } from './select-option.directive';

@Component({
  selector: 'cmp-select-options',
  imports: [NgTemplateOutlet],
  templateUrl: './select-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => SelectOptionsComponent),
      multi: true,
    },
  ],
})
export class SelectOptionsComponent<T extends string>
  implements ControlValueAccessor
{
  readonly label = input<string>('');
  readonly legendHidden = input<boolean>(false);
  readonly fieldSetClass = input<string>('');
  readonly model = signal<T | undefined>(undefined);
  readonly children = contentChildren(SelectOptionDirective<T>);

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

  registerOnChange(fn: SelectOptionsComponent<T>['onChanged']): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: SelectOptionsComponent<T>['onTouched']): void {
    this.onTouched = fn;
  }
}
