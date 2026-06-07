import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { SelectOption, SelectOptions } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-mode',
  imports: [SelectOptions, SelectOption, FormField],
  templateUrl: './config-rules-mode.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesMode {
  private state = inject(GLOBAL_STATE);
  rulesMode = form(this.state.rules.mode);
}
