import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[value]',
})
export class SelectOption<V extends string> {
  readonly template = inject(TemplateRef<unknown>);
  readonly value = input.required<V>();
}
