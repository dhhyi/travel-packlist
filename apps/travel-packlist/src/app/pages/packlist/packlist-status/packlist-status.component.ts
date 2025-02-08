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
import {
  PieChartComponent,
  ProgressComponent,
} from '@travel-packlist/components';
import {
  IconLockComponent,
  IconLockOpenComponent,
  IconPieChartComponent,
} from '@travel-packlist/icons';
import {
  serializeWeight,
  serializeWeightPartition,
} from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

import {
  staggerInCard,
  staggerOutCard,
} from '../../../animations/card.animations';

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
    IconLockOpenComponent,
    IconLockComponent,
    IconPieChartComponent,
    ProgressComponent,
    PieChartComponent,
  ],
  animations: [animateDiagram],
})
export class PacklistStatusComponent {
  private state = inject(GLOBAL_STATE);
  readonly questionsAvailable = computed(
    () => this.state.active.questions().length > 0,
  );
  isAnswersLockActive = this.state.packlist.answersLocked;
  trackWeight = this.state.config.trackWeight;
  stats = this.state.packlist.stats;

  toggleAnswersLock() {
    this.state.packlist.answersLocked.update((lock) => !lock);
  }

  serializeWeightPartition = serializeWeightPartition;

  readonly statusLabelText = computed(() => {
    const totalWeight = this.stats().totalWeight;
    const checkedWeight = this.stats().checkedWeight;
    const checkedItems = this.stats().checkedItems.toString();
    const totalItems = this.stats().totalItems.toString();

    if (this.trackWeight()) {
      return $localize`You have packed ${serializeWeight(checkedWeight, undefined, 1)}:CHECKED_WEIGHT: out of ${serializeWeight(totalWeight, undefined, 1)}:TOTAL_WEIGHT: by packing ${checkedItems}:CHECKED_ITEMS: out of ${totalItems}:TOTAL_ITEMS: items.`;
    } else {
      return $localize`You have packed ${checkedItems}:CHECKED_ITEMS: out of ${totalItems}:TOTAL_ITEMS: items.`;
    }
  });

  readonly animationDuration = signal(0);

  readonly statsVisible = this.state.packlist.weightStatsVisible;

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
      this.animationDuration.set(this.state.config.animations() ? 500 : 0);
    });
  }
}
