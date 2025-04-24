import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  Directive,
  effect,
  forwardRef,
  inject,
  input,
  signal,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[value]',
})
export class SelectOptionDirective<V extends string> {
  readonly value = input.required<V>();
  readonly template = inject(TemplateRef<unknown>);
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cmp-select-options',
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.css',
  imports: [NgTemplateOutlet],
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
