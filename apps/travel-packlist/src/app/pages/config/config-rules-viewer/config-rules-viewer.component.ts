import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { CheckboxComponent } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-viewer',
  imports: [CheckboxComponent, FormField],
  templateUrl: './config-rules-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesViewerComponent {
  private state = inject(GLOBAL_STATE);
  fadeOutDisabledRules = form(this.state.config.fadeOutDisabledRules);
  highlightVariableStatus = form(this.state.config.highlightVariableStatus);
  go = this.state.router.go;
  readonly rulesLoaded = computed(() => this.state.rules.raw.hasValue());
  readonly rulesError = computed(
    () => this.state.rules.raw.status() === 'error',
  );
}
