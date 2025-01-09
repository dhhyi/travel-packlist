import {
  Component,
  inject,
  ChangeDetectionStrategy,
  ElementRef,
  input,
  viewChild,
  computed,
  viewChildren,
  effect,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IconClearComponent,
  IconDeleteComponent,
  IconEditComponent,
  IconReorderComponent,
  IconSearchComponent,
  IconSwapComponent,
  IconViewComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { RulesClipboard } from '../rules.clipboard';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-toolbar',
  imports: [
    FormsModule,
    IconViewComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconReorderComponent,
    IconSwapComponent,
    IconSearchComponent,
    IconClearComponent,
    ToolbarButtonComponent,
  ],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  private readonly toolbarButtons = viewChildren(ToolbarButtonComponent);

  readonly noOfVisibleRules = input.required<number>();

  private state = inject(GLOBAL_STATE);
  mode = this.state.router.rulesMode;
  searchTerm = this.state.router.filterRulesQuery;
  clipboard = inject(RulesClipboard);

  readonly sticky = computed(() => this.state.browser.scrollY() > 48);

  readonly searchInput =
    viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

  constructor() {
    effect(() => {
      this.toolbarButtons().forEach((button) => {
        button.focusNext.subscribe(() => {
          this.focusNext();
        });
        button.focusPrevious.subscribe(() => {
          this.focusPrevious();
        });
      });
    });
  }

  private focusNext() {
    const buttons = this.toolbarButtons();
    const count = buttons.length;
    const index = buttons.findIndex((button) => button.type() === this.mode());
    if (index !== -1) {
      const nextIndex = (index + 1) % count;
      buttons[nextIndex].focus();
    }
  }
  private focusPrevious() {
    const buttons = this.toolbarButtons();
    const count = buttons.length;
    const index = buttons.findIndex((button) => button.type() === this.mode());
    if (index !== -1) {
      const nextIndex = (index - 1 + count) % count;
      buttons[nextIndex].focus();
    }
  }

  focusSearch() {
    setTimeout(() => {
      this.searchInput().nativeElement.focus();
    }, 50);
  }

  clearSearch() {
    this.searchTerm.set('');
    this.focusSearch();
  }
}
