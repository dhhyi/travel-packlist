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
  styleUrl: './select-options.component.scss',
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
  readonly label = input.required<string>();
  readonly model = signal<T | undefined>(undefined);
  readonly children = contentChildren(SelectOptionDirective<T>);

  onChanged: (value: T | undefined) => void = noop;
  onTouched: () => void = noop;

  constructor() {
    effect(() => {
      this.onChanged(this.model());
      this.onTouched();
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
    this.model.set(value);
  }

  registerOnChange(fn: SelectOptionsComponent<T>['onChanged']): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: SelectOptionsComponent<T>['onTouched']): void {
    this.onTouched = fn;
  }
}
