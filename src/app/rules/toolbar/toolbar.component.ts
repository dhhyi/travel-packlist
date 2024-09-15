import { Component, inject, OnDestroy } from '@angular/core';
import { RulesMode } from '../rules.mode';
import { RulesClipboard } from '../rules.clipboard';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnDestroy {
  mode = inject(RulesMode);
  clipboard = inject(RulesClipboard);

  ngOnDestroy(): void {
    this.mode.reset();
  }
}
