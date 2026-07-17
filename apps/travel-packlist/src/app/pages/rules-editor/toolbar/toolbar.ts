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
import { form, FormField } from '@angular/forms/signals';
import {
  IconClear,
  IconDelete,
  IconEdit,
  IconReorder,
  IconSearch,
  IconSwap,
  IconView,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { RulesClipboard } from '../rules.clipboard';
import { ToolbarButton } from './toolbar-button/toolbar-button';

@Component({
  selector: 'app-toolbar',
  imports: [
    IconView,
    IconEdit,
    IconDelete,
    IconReorder,
    IconSwap,
    IconSearch,
    IconClear,
    ToolbarButton,
    FormField,
  ],
  templateUrl: './toolbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toolbar {
  private state = inject(GLOBAL_STATE);
  private clipboard = inject(RulesClipboard);

  private readonly toolbarButtons = viewChildren(ToolbarButton);

  readonly noOfVisibleRules = input.required<number>();

  mode = this.state.router.rulesMode;
  readonly editable = computed(() => this.state.rules.mode() === 'local');
  searchTerm = form(this.state.router.filterRulesQuery);
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
    this.searchTerm().value.set('');
    this.focusSearch();
  }
}
