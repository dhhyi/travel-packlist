import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../../dialog';

@Component({
  selector: 'app-config-rules-template',
  imports: [SelectOptionsComponent, SelectOptionDirective, FormsModule],
  templateUrl: './config-rules-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesTemplateComponent {
  private state = inject(GLOBAL_STATE);

  rulesTemplate = this.state.config.rulesTemplate;

  async copyRulesLocally() {
    if (
      !this.state.rules.localRulesAvailable() ||
      (await confirm(
        $localize`Copying rules locally will replace the previous local rules. Do you really want to continue?`,
      ))
    ) {
      this.state.localRules.copyFromCurrent();
    }
  }
}
