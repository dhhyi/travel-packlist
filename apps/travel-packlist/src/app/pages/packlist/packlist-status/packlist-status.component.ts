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
  BarChartComponent,
  PieChartComponent,
  ProgressComponent,
} from '@travel-packlist/components';
import {
  IconBarChartComponent,
  IconLockComponent,
  IconLockOpenComponent,
  IconPieChartComponent,
} from '@travel-packlist/icons';
import {
  serializeWeight,
  serializeWeightPartition,
} from '@travel-packlist/model';
import { GLOBAL_STATE, ItemStats } from '@travel-packlist/state';

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
    BarChartComponent,
    IconBarChartComponent,
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

  readonly statsVisible = this.state.packlist.statsVisible;

  toggleStats(stat: ItemStats) {
    this.state.packlist.statsVisible.update((visible) => {
      if (visible === stat) {
        return undefined;
      } else {
        return stat;
      }
    });
  }

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

  readonly heaviestItems = computed(
    () =>
      this.state.packlist
        .model()
        .flatMap((category) => category.items)
        .filter((i) => i.weight && !i.skipped && i.weight > 0)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .toSorted((l, r) => r.weight! - l.weight!)
        .slice(0, 10)
        .reduce(
          (acc, i) => {
            const max = (acc.max || i.weight) ?? 0;
            const item = {
              name: `${i.name} (${serializeWeight(i.weight)})`,
              value: (i.weight ?? 0) / max,
            };
            return { max, items: [...acc.items, item] };
          },
          { max: NaN, items: [] as { name: string; value: number }[] },
        ).items,
  );

  readonly animationsDisabled = signal(true);

  constructor() {
    afterRender(() => {
      this.animationsDisabled.set(!this.state.config.animations());
      this.animationDuration.set(this.state.config.animations() ? 500 : 0);
    });
  }
}
