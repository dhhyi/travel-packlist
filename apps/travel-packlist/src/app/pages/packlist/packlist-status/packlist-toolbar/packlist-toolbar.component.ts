import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  IconBarChartComponent,
  IconInvisibleComponent,
  IconLockComponent,
  IconLockOpenComponent,
  IconPieChartComponent,
  IconVisibleComponent,
  IconEditNoteComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE, ItemStats } from '@travel-packlist/state';

@Component({
  selector: 'app-packlist-toolbar',
  imports: [
    IconBarChartComponent,
    IconLockOpenComponent,
    IconLockComponent,
    IconPieChartComponent,
    IconInvisibleComponent,
    IconVisibleComponent,
    IconEditNoteComponent,
  ],
  templateUrl: './packlist-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistToolbarComponent {
  private state = inject(GLOBAL_STATE);

  isAnswersLockActive = this.state.packlist.isAnswersLocked;
  isHideCompleted = this.state.packlist.isHideCompleted;

  readonly questionsAvailable = computed(
    () => this.state.active.questions().length > 0,
  );

  toggleAnswersLock() {
    this.state.packlist.toggleAnswersLock();
  }

  toggleHideCompleted() {
    this.state.packlist.toggleHideCompleted();
  }

  readonly displayWeightStatsButtons = computed(
    () =>
      this.state.config.trackWeight() &&
      this.state.packlist.stats().totalWeight > 0,
  );

  readonly statsVisible = this.state.packlist.isStatsVisible;

  toggleStats(stat: ItemStats) {
    if (this.statsVisible() === stat) {
      this.state.packlist.setStatsVisible(undefined);
    } else {
      this.state.packlist.setStatsVisible(stat);
    }
  }

  readonly displayNotesButton = computed(
    () => this.state.packlist.currentSlot() > 0,
  );

  readonly notesVisible = this.state.packlist.isNotesVisible;

  toggleNotes() {
    this.state.packlist.setNotesVisible(!this.notesVisible());
  }
}
