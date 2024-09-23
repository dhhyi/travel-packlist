import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  output,
  input,
} from '@angular/core';
import { RulesMode } from '../rules.mode';
import { RulesClipboard } from '../rules.clipboard';
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
export class ToolbarComponent implements OnDestroy {
  noOfVisibleRules = input.required<number>();

  mode = inject(RulesMode);
  clipboard = inject(RulesClipboard);

  sticky = signal(false);

  private scroller = inject(ViewportScroller);

  @ViewChild('searchInput', { read: ElementRef }) searchInput!: ElementRef;
  searchControl = new FormControl('');

  readonly searchTerm = output<string>();

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), takeUntilDestroyed())
      .subscribe((value) => {
        this.searchTerm.emit(value ?? '');
      });
  }

  focusSearch() {
    setTimeout(() => {
      (this.searchInput.nativeElement as HTMLInputElement).focus();
    }, 50);
  }

  ngOnDestroy(): void {
    this.mode.reset();
  }

  @HostListener('window:scroll')
  scroll() {
    this.sticky.set(this.scroller.getScrollPosition()[1] > 48);
  }
}
