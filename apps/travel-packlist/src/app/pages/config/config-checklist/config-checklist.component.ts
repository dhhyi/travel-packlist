import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  categorySorting = this.state.config.categorySorting;

  async resetChecklist() {
    if (
      await confirm($localize`Are you sure you want to reset the checklist?`)
    ) {
      this.state.packlist.reset();
      this.state.router.go('packlist');
    }
  }
}
