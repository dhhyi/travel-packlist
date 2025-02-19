import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-rules-mode',
  templateUrl: './config-rules-mode.component.html',
  styleUrl: '../config-section.css',
  imports: [FormsModule, SelectOptionsComponent, SelectOptionDirective],
})
export class ConfigRulesModeComponent {
  private state = inject(GLOBAL_STATE);
  rulesMode = this.state.rules.mode;
}
