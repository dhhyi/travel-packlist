import {
  group,
  query,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  afterRenderEffect,
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
  selector: 'app-packlist-status',
  imports: [
    HeaviestItemsComponent,
    PacklistToolbarComponent,
    PacklistProgressComponent,
    WeightDistributionComponent,
  ],
  templateUrl: './packlist-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [animateDiagram],
})
export class PacklistStatusComponent {
  private state = inject(GLOBAL_STATE);

  readonly statsVisible = this.state.packlist.statsVisible;

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRenderEffect(() => {
      this.animationsDisabled.set(!this.state.config.animations());
    });
  }
}
