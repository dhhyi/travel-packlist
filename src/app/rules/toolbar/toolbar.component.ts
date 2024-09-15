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

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgClass],
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
