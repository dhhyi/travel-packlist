import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { HeaviestItems } from './heaviest-items/heaviest-items';
import { PacklistProgress } from './packlist-progress/packlist-progress';
import { WeightDistribution } from './weight-distribution/weight-distribution';

@Component({
  selector: 'app-packlist-status',
  imports: [HeaviestItems, PacklistProgress, WeightDistribution],
  templateUrl: './packlist-status.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistStatus {
  private state = inject(GLOBAL_STATE);

  readonly statsVisible = this.state.packlist.isStatsVisible;

  readonly enterAnimation = signal('');
  readonly leaveAnimation = signal('');

  constructor() {
    this.state.browser.animateEffect('animate-fade-in', this.enterAnimation);
    this.state.browser.animateEffect('animate-fade-out', this.leaveAnimation);
  }
}
