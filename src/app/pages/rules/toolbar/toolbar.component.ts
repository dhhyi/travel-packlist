import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  ChangeDetectionStrategy,
  ElementRef,
  input,
  viewChild,
  computed,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IconClearComponent } from '../../../icons/icon-clear/icon-clear.component';
import { IconDeleteComponent } from '../../../icons/icon-delete/icon-delete.component';
import { IconEditComponent } from '../../../icons/icon-edit/icon-edit.component';
import { IconReorderComponent } from '../../../icons/icon-reorder/icon-reorder.component';
import { IconSearchComponent } from '../../../icons/icon-search/icon-search.component';
import { IconSwapComponent } from '../../../icons/icon-swap/icon-swap.component';
import { IconViewComponent } from '../../../icons/icon-view/icon-view.component';
import { GlobalState } from '../../../state/global-state';
import { RulesClipboard } from '../rules.clipboard';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-toolbar',
  imports: [
    FormsModule,
    NgClass,
    IconViewComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconReorderComponent,
    IconSwapComponent,
    IconSearchComponent,
    IconClearComponent,
  ],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  readonly noOfVisibleRules = input.required<number>();

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  searchTerm = this.state.signal('filterRulesQuery');
  clipboard = inject(RulesClipboard);

  readonly sticky = computed(() => this.state.signal('scrollY')() > 48);

  readonly searchInput =
    viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

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
