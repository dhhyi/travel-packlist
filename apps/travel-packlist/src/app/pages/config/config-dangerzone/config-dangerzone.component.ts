import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RESET_SWITCH } from '@travel-packlist/state';

import { confirm } from '../../../dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-dangerzone',
  templateUrl: './config-dangerzone.component.html',
  styleUrl: '../config-section.scss',
})
export class ConfigDangerzoneComponent {
  private router = inject(Router);

  private reset = inject(RESET_SWITCH);

  async resetEverything() {
    if (
      await confirm(
        $localize`Are you sure you want to reset the whole application?`,
      )
    ) {
      this.reset();
      await this.router.navigate(['/packlist']);
    }
  }
}
