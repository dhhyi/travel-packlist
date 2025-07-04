import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-rules-mode',
  imports: [FormsModule, SelectOptionsComponent, SelectOptionDirective],
  templateUrl: './config-rules-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRulesModeComponent {
  private state = inject(GLOBAL_STATE);
  rulesMode = this.state.rules.mode;
}
