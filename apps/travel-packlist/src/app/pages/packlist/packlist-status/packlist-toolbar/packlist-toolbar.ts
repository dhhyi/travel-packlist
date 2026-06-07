import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  IconBarChart,
  IconInvisible,
  IconLock,
  IconLockOpen,
  IconPieChart,
  IconVisible,
  IconEditNote,
} from '@travel-packlist/icons';
import { GLOBAL_STATE, ItemStats } from '@travel-packlist/state';

@Component({
  selector: 'app-packlist-toolbar',
  imports: [
    IconBarChart,
    IconLockOpen,
    IconLock,
    IconPieChart,
    IconInvisible,
    IconVisible,
    IconEditNote,
  ],
  templateUrl: './packlist-toolbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistToolbar {
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
