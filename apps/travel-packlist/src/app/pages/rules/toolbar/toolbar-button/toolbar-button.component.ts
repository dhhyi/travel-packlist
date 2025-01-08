import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { GlobalState, RuleModes } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
})
export class ToolbarButtonComponent {
  private state = inject(GlobalState);
  readonly mode = this.state.signal('rulesMode');

  readonly type = input.required<RuleModes>();
  readonly label = input.required<string>();
  readonly disabled = input<boolean>(false);

  readonly button = viewChild<ElementRef<HTMLButtonElement>>('button');

  readonly focusPrevious = output();
  readonly focusNext = output();

  focus() {
    const button = this.button();
    if (button) {
      button.nativeElement.focus();
      this.mode.set(this.type());
    }
  }
}
