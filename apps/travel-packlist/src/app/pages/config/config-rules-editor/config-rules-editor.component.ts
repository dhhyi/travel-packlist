import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-rules-editor',
  templateUrl: './config-rules-editor.component.html',
  styleUrl: '../config-section.css',
  imports: [CheckboxComponent, FormsModule],
})
export class ConfigRulesEditorComponent {
  private state = inject(GLOBAL_STATE);
  fadeOutDisabledRules = this.state.config.fadeOutDisabledRules;
  highlightVariableStatus = this.state.config.highlightVariableStatus;
  refactorVariables = this.state.config.refactorVariables;
  go = this.state.router.go;
}
