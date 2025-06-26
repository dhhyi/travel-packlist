import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ProgressComponent } from '@travel-packlist/components';
import {
  serializeWeight,
  serializeWeightPartition,
} from '@travel-packlist/model';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-packlist-progress',
  imports: [ProgressComponent],
  templateUrl: './packlist-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistProgressComponent {
  private state = inject(GLOBAL_STATE);
  trackWeight = this.state.config.trackWeight;
  stats = this.state.packlist.stats;

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

  constructor() {
    afterNextRender({
      write: () => {
        this.animationDuration.set(this.state.config.animations() ? 500 : 0);
      },
    });
  }
}
