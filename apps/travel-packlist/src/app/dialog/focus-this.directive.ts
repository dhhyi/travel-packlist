import {
  Directive,
  ElementRef,
  afterRenderEffect,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appFocusThis]',
})
export class FocusThisDirective {
  readonly appFocusThis = input<boolean>(false);

  private element = inject(ElementRef);
  constructor() {
    afterRenderEffect(() => {
      const element = this.element.nativeElement as HTMLElement | undefined;
      if (this.appFocusThis() && element) {
        element.focus();
      }
    });
  }
}
