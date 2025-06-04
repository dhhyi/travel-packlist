import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-editor',
  imports: [CheckboxComponent, FormsModule],
  templateUrl: './config-rules-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesEditorComponent {
  private state = inject(GLOBAL_STATE);
  fadeOutDisabledRules = this.state.config.fadeOutDisabledRules;
  highlightVariableStatus = this.state.config.highlightVariableStatus;
  refactorVariables = this.state.config.refactorVariables;
  confirmRuleDeletion = this.state.config.confirmRuleDeletion;
  go = this.state.router.go;
}
