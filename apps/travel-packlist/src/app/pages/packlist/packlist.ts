import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { IconProgressActivity } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { DisplayItems } from './display-items/display-items';
import { DisplayNotes } from './display-notes/display-notes';
import { DisplayQuestions } from './display-questions/display-questions';
import { DisplayTitle } from './display-title/display-title';
import { PacklistStatus } from './packlist-status/packlist-status';
import { PacklistToolbar } from './packlist-status/packlist-toolbar/packlist-toolbar';

@Component({
  selector: 'app-packlist',
  imports: [
    DisplayItems,
    DisplayQuestions,
    PacklistStatus,
    PacklistToolbar,
    IconProgressActivity,
    DisplayTitle,
    DisplayNotes,
  ],
  templateUrl: './packlist.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Packlist {
  private state = inject(GLOBAL_STATE);

  readonly rulesAvailable = computed(
    () => this.state.rules.parsed.value().length > 0,
  );

  rulesMode = this.state.rules.mode;
  isLoading = this.state.rules.isLoading;

  goToRulesEdit() {
    this.state.router.go('rules->edit');
  }

  goToConfigImport() {
    this.state.router.go('config#import');
  }
}
