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
  computed,
  inject,
  signal,
} from '@angular/core';
import { PieChartComponent } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';
import { HeaviestItemsComponent } from './heaviest-items/heaviest-items.component';
import { PacklistProgressComponent } from './packlist-progress/packlist-progress.component';
import { PacklistToolbarComponent } from './packlist-toolbar/packlist-toolbar.component';

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
    PieChartComponent,
    PacklistToolbarComponent,
    PacklistProgressComponent,
  ],
  animations: [animateDiagram],
})
export class PacklistStatusComponent {
  private state = inject(GLOBAL_STATE);
  private stats = this.state.packlist.stats;

  readonly statsVisible = this.state.packlist.statsVisible;

  readonly weightStats = computed(() => {
    const totalWeight = this.stats().totalWeight;
    return this.state.packlist
      .model()
      .map((category) => ({
        name: category.name,
        value: category.totalWeight / totalWeight,
      }))
      .filter((category) => category.value > 0);
  });

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRender(() => {
      this.animationsDisabled.set(!this.state.config.animations());
    });
  }
}
