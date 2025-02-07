import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CheckboxComponent,
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../../dialog';

@Component({
  selector: 'app-config-checklist',
  templateUrl: './config-checklist.component.html',
  styleUrl: '../config-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    CheckboxComponent,
    SelectOptionsComponent,
    SelectOptionDirective,
  ],
})
export class ConfigChecklistComponent {
  private state = inject(GLOBAL_STATE);

  trackWeight = this.state.config.trackWeight;
  skipItems = this.state.config.skipItems;
  categorySorting = this.state.config.categorySorting;

  readonly skipItemsHelpText = computed(() =>
    this.state.browser.isMobile()
      ? $localize`You can skip items in the packlist by long pressing them.`
      : $localize`You can skip items in the packlist by double clicking them.`,
  );

  async resetChecklist() {
    if (
      await confirm($localize`Are you sure you want to reset the checklist?`)
    ) {
      this.state.packlist.reset();
      this.state.router.go('packlist');
    }
  }
}
