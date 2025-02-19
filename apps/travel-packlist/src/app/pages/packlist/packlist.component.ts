import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { DisplayItemsComponent } from './display-items/display-items.component';
import { DisplayQuestionsComponent } from './display-questions/display-questions.component';
import { PacklistStatusComponent } from './packlist-status/packlist-status.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-packlist',
  imports: [
    DisplayItemsComponent,
    DisplayQuestionsComponent,
    PacklistStatusComponent,
  ],
  templateUrl: './packlist.component.html',
})
export class PacklistComponent {
  private state = inject(GLOBAL_STATE);

  readonly rulesAvailable = computed(
    () => this.state.rules.parsed().length > 0,
  );

  rulesMode = this.state.rules.mode;

  goToRulesEdit() {
    this.state.router.go('rules->edit');
  }

  goToConfigImport() {
    this.state.router.go('config#import');
  }
}
