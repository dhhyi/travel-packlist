import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { IconProgressActivityComponent } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { DisplayItemsComponent } from './display-items/display-items.component';
import { DisplayQuestionsComponent } from './display-questions/display-questions.component';
import { DisplayTitleComponent } from './display-title/display-title.component';
import { PacklistStatusComponent } from './packlist-status/packlist-status.component';
import { PacklistToolbarComponent } from './packlist-status/packlist-toolbar/packlist-toolbar.component';

@Component({
  selector: 'app-packlist',
  imports: [
    DisplayItemsComponent,
    DisplayQuestionsComponent,
    PacklistStatusComponent,
    PacklistToolbarComponent,
    IconProgressActivityComponent,
    DisplayTitleComponent,
  ],
  templateUrl: './packlist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacklistComponent {
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
