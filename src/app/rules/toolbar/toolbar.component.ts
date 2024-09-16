import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { RulesMode } from '../rules.mode';
import { RulesClipboard } from '../rules.clipboard';
import { NgClass, ViewportScroller } from '@angular/common';
import { IconViewComponent } from '../../icons/icon-view/icon-view.component';
import { IconEditComponent } from '../../icons/icon-edit/icon-edit.component';
import { IconDeleteComponent } from '../../icons/icon-delete/icon-delete.component';
import { IconReorderComponent } from '../../icons/icon-reorder/icon-reorder.component';
import { IconSwapComponent } from '../../icons/icon-swap/icon-swap.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    NgClass,
    IconViewComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconReorderComponent,
    IconSwapComponent,
  ],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnDestroy {
  mode = inject(RulesMode);
  clipboard = inject(RulesClipboard);

  sticky = signal(false);

  private scroller = inject(ViewportScroller);

  ngOnDestroy(): void {
    this.mode.reset();
  }

  @HostListener('window:scroll')
  scroll() {
    this.sticky.set(this.scroller.getScrollPosition()?.[1] > 100);
  }
}
