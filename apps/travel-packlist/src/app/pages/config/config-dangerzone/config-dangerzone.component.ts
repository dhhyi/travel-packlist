import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GLOBAL_STATE, RESET_SWITCH } from '@travel-packlist/state';

import { confirm } from '../../../dialog';

@Component({
  selector: 'app-config-dangerzone',
  templateUrl: './config-dangerzone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigDangerzoneComponent {
  private reset = inject(RESET_SWITCH);
  private state = inject(GLOBAL_STATE);

  async resetEverything() {
    if (
      await confirm(
        $localize`Are you sure you want to reset the whole application?`,
      )
    ) {
      await this.reset();
      this.state.router.go('packlist');
    }
  }
}
