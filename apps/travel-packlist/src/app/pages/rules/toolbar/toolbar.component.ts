import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
  viewChildren,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  private readonly toolbarButtons = viewChildren(ToolbarButtonComponent);

  readonly noOfVisibleRules = input.required<number>();

  private state = inject(GLOBAL_STATE);
  mode = this.state.router.rulesMode;
  readonly editable = computed(() => this.state.rules.mode() === 'local');
  searchTerm = this.state.router.filterRulesQuery;
  private clipboard = inject(RulesClipboard);
  clipboardItems = this.clipboard.itemsCount;
  clipboardQuestions = this.clipboard.questionsCount;

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

  private focusSearch() {
    setTimeout(() => {
      this.searchInput().nativeElement.focus();
    }, 50);
  }

  clearSearch() {
    this.searchTerm.set('');
    this.focusSearch();
  }
}
