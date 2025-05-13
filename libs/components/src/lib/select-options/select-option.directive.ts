import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[value]',
})
export class SelectOptionDirective<V extends string> {
  readonly value = input.required<V>();
  readonly template = inject(TemplateRef<unknown>);
}
