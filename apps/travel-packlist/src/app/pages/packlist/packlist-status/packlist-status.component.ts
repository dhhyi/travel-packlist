import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { HeaviestItemsComponent } from './heaviest-items/heaviest-items.component';
import { PacklistProgressComponent } from './packlist-progress/packlist-progress.component';
import { WeightDistributionComponent } from './weight-distribution/weight-distribution.component';

@Component({
  selector: 'app-packlist-status',
  imports: [
    HeaviestItemsComponent,
    PacklistProgressComponent,
    WeightDistributionComponent,
  ],
  templateUrl: './packlist-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistStatusComponent {
  private state = inject(GLOBAL_STATE);

  readonly statsVisible = this.state.packlist.isStatsVisible;

  readonly animationsDisabled = signal(true);

  constructor() {
    afterNextRender({
      write: () => {
        this.animationsDisabled.set(!this.state.config.animations());
      },
    });
  }
}
