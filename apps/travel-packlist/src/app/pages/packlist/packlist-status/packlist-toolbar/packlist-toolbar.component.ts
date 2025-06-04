import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  IconBarChartComponent,
  IconLockComponent,
  IconLockOpenComponent,
  IconPieChartComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE, ItemStats } from '@travel-packlist/state';

@Component({
  selector: 'app-packlist-toolbar',
  imports: [
    IconBarChartComponent,
    IconLockOpenComponent,
    IconLockComponent,
    IconPieChartComponent,
  ],
  templateUrl: './packlist-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistToolbarComponent {
  private state = inject(GLOBAL_STATE);

  isAnswersLockActive = this.state.packlist.answersLocked;

  readonly questionsAvailable = computed(
    () => this.state.active.questions().length > 0,
  );

  toggleAnswersLock() {
    this.state.packlist.answersLocked.update((lock) => !lock);
  }

  readonly displayWeightStatsButtons = computed(
    () =>
      this.state.config.trackWeight() &&
      this.state.packlist.stats().totalWeight > 0,
  );

  readonly statsVisible = this.state.packlist.statsVisible;

  toggleStats(stat: ItemStats) {
    this.statsVisible.update((visible) => {
      if (visible === stat) {
        return undefined;
      } else {
        return stat;
      }
    });
  }
}
