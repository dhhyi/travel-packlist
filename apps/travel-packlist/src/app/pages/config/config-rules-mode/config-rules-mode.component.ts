import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import {
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-mode',
  imports: [SelectOptionsComponent, SelectOptionDirective, FormField],
  templateUrl: './config-rules-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesModeComponent {
  private state = inject(GLOBAL_STATE);
  rulesMode = form(this.state.rules.mode);
}
