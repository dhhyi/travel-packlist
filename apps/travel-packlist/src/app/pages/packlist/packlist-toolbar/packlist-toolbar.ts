import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  IconBarChart,
  IconEditNote,
  IconInvisible,
  IconLock,
  IconLockOpen,
  IconPieChart,
  IconVisible,
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

  protected readonly display = computed(() => {
    const questionsAvailable = this.state.active.questions().length > 0;
    const weightStatsButtons =
      this.state.config.trackWeight() &&
      this.state.packlist.stats().totalWeight > 0;
    const notesButton = this.state.packlist.currentSlot() > 0;
    const hideButtons = this.state.config.accessibility() !== 'accessible';
    if (
      !questionsAvailable ||
      (!weightStatsButtons && !notesButton && !hideButtons)
    ) {
      return undefined;
    }
    return { weightStatsButtons, notesButton, hideButtons };
  });

  toggleAnswersLock() {
    this.state.packlist.toggleAnswersLock();
  }

  toggleHideCompleted() {
    this.state.packlist.toggleHideCompleted();
  }

  readonly statsVisible = this.state.packlist.isStatsVisible;

  toggleStats(stat: ItemStats) {
    if (this.statsVisible() === stat) {
      this.state.packlist.setStatsVisible(undefined);
    } else {
      this.state.packlist.setStatsVisible(stat);
    }
  }

  readonly notesVisible = this.state.packlist.isNotesVisible;

  toggleNotes() {
    this.state.packlist.setNotesVisible(!this.notesVisible());
  }
}
