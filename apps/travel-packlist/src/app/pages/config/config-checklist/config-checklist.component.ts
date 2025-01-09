import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentsModule } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../../dialog';
import { ConfigFacade } from '../config.facade';

@Component({
  selector: 'app-config-checklist',
  templateUrl: './config-checklist.component.html',
  styleUrl: '../config-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ComponentsModule],
})
export class ConfigChecklistComponent {
  private router = inject(Router);
  private state = inject(GLOBAL_STATE);
  private facade = inject(ConfigFacade);

  trackWeight = this.state.config.trackWeight;
  categorySorting = this.state.config.categorySorting;

  async resetChecklist() {
    if (
      await confirm($localize`Are you sure you want to reset the checklist?`)
    ) {
      this.facade.resetChecklist();
      await this.router.navigate(['/packlist']);
    }
  }
}
