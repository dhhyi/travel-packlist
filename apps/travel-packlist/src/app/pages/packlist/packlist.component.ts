import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { DisplayItemsComponent } from './display-items/display-items.component';
import { DisplayQuestionsComponent } from './display-questions/display-questions.component';
import { PacklistStatusComponent } from './packlist-status/packlist-status.component';
import { PacklistFacade } from './packlist.facade';

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
  private facade = inject(PacklistFacade);
  rulesAvailable = this.facade.rulesAvailable;
  goToRulesEdit = this.facade.goToRulesEdit;
  goToConfigImport = this.facade.goToConfigImport;
}
