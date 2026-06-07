import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appFocusThis]',
})
export class FocusThis {
  readonly appFocusThis = input(false);

  private element = inject(ElementRef);

  constructor() {
    afterNextRender({
      write: () => {
        const element = this.element.nativeElement as HTMLElement | undefined;
        if (this.appFocusThis() && element) {
          element.focus();
        }
      },
    });
  }
}
