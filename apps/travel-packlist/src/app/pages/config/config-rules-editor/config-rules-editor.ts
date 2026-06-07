import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Checkbox } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-editor',
  imports: [Checkbox, FormField],
  templateUrl: './config-rules-editor.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesEditor {
  private state = inject(GLOBAL_STATE);
  fadeOutDisabledRules = form(this.state.config.fadeOutDisabledRules);
  highlightVariableStatus = form(this.state.config.highlightVariableStatus);
  refactorVariables = form(this.state.config.refactorVariables);
  confirmRuleDeletion = form(this.state.config.confirmRuleDeletion);
  go = this.state.router.go;
}
