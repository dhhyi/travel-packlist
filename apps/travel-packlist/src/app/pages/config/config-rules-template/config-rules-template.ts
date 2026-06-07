import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { SelectOption, SelectOptions } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { confirm } from '../../../dialog';

@Component({
  selector: 'app-config-rules-template',
  imports: [SelectOptions, SelectOption, FormField],
  templateUrl: './config-rules-template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesTemplate {
  private state = inject(GLOBAL_STATE);

  rulesTemplate = form(this.state.config.rulesTemplate);

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
