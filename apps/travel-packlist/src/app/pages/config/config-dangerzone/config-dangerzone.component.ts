import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '@travel-packlist/state';

import { confirm } from '../../../dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-dangerzone',
  templateUrl: './config-dangerzone.component.html',
  styleUrl: '../config-section.scss',
})
export class ConfigDangerzoneComponent {
  private router = inject(Router);

  private state = inject(GlobalState);

  async resetEverything() {
    if (
      await confirm(
        $localize`:@@config.dangerzone.reset.question:Are you sure you want to reset the whole application?` as string,
      )
    ) {
      this.state.reset();
      await this.router.navigate(['/packlist']);
    }
  }
}
