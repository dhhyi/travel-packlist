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
  private element = inject(ElementRef);

  readonly appFocusThis = input(false);

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
