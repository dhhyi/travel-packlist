import {
  group,
  query,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';
import { HeaviestItemsComponent } from './heaviest-items/heaviest-items.component';
import { PacklistProgressComponent } from './packlist-progress/packlist-progress.component';
import { PacklistToolbarComponent } from './packlist-toolbar/packlist-toolbar.component';
import { WeightDistributionComponent } from './weight-distribution/weight-distribution.component';

const animateDiagram = trigger('animateDiagram', [
  transition('* <=> *', [
    group([
      query('div.card:enter', useAnimation(staggerInCard), { optional: true }),
      query('div.card:leave', useAnimation(staggerOutCard), { optional: true }),
    ]),
  ]),
]);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-packlist-status',
  templateUrl: './packlist-status.component.html',
  imports: [
    HeaviestItemsComponent,
    PacklistToolbarComponent,
    PacklistProgressComponent,
    WeightDistributionComponent,
  ],
  animations: [animateDiagram],
})
export class PacklistStatusComponent {
  private state = inject(GLOBAL_STATE);

  readonly statsVisible = this.state.packlist.statsVisible;

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRender(() => {
      this.animationsDisabled.set(!this.state.config.animations());
    });
  }
}
