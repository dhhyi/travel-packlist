import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { GLOBAL_STATE, RuleModes } from '@travel-packlist/state';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarButtonComponent {
  private state = inject(GLOBAL_STATE);
  readonly mode = this.state.router.rulesMode;

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
