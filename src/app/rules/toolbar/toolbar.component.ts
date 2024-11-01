import {
  Component,
  HostListener,
  inject,
  signal,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  input,
} from '@angular/core';
import { RulesClipboard } from '../../state/rules.clipboard';
import { NgClass, ViewportScroller } from '@angular/common';
import { IconViewComponent } from '../../icons/icon-view/icon-view.component';
import { IconEditComponent } from '../../icons/icon-edit/icon-edit.component';
import { IconDeleteComponent } from '../../icons/icon-delete/icon-delete.component';
import { IconReorderComponent } from '../../icons/icon-reorder/icon-reorder.component';
import { IconSwapComponent } from '../../icons/icon-swap/icon-swap.component';
import { IconSearchComponent } from '../../icons/icon-search/icon-search.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { IconClearComponent } from '../../icons/icon-clear/icon-clear.component';
import { GlobalState } from '../../state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
  noOfVisibleRules = input.required<number>();

  private state = inject(GlobalState);
  mode = this.state.signal('rulesMode');
  private searchTerm = this.state.signal('filterRulesQuery');
  clipboard = inject(RulesClipboard);

  sticky = signal(false);

  private scroller = inject(ViewportScroller);

  @ViewChild('searchInput', { read: ElementRef }) searchInput!: ElementRef;
  searchControl = new FormControl(this.searchTerm());

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed())
      .subscribe((value) => {
        this.searchTerm.set(value ?? undefined);
      });
  }

  focusSearch() {
    setTimeout(() => {
      (this.searchInput.nativeElement as HTMLInputElement).focus();
    }, 50);
  }

  @HostListener('window:scroll')
  scroll() {
    this.sticky.set(this.scroller.getScrollPosition()[1] > 48);
  }
}
