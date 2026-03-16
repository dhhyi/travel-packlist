import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { CheckboxComponent } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-editor',
  imports: [CheckboxComponent, FormField],
  templateUrl: './config-rules-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesEditorComponent {
  private state = inject(GLOBAL_STATE);
  fadeOutDisabledRules = form(this.state.config.fadeOutDisabledRules);
  highlightVariableStatus = form(this.state.config.highlightVariableStatus);
  refactorVariables = form(this.state.config.refactorVariables);
  confirmRuleDeletion = form(this.state.config.confirmRuleDeletion);
  go = this.state.router.go;
}
