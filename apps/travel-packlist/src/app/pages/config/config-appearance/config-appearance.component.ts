import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import {
  CheckboxComponent,
  SelectOptionDirective,
  SelectOptionsComponent,
} from '@travel-packlist/components';
import { FlagGermanyComponent, FlagUkComponent } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-appearance',
  imports: [
    SelectOptionsComponent,
    SelectOptionDirective,
    FlagGermanyComponent,
    FlagUkComponent,
    CheckboxComponent,
    FormField,
  ],
  templateUrl: './config-appearance.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigAppearanceComponent {
  private state = inject(GLOBAL_STATE);
  theme = form(this.state.config.theme);
  language = form(this.state.config.language);
  fontSize = form(this.state.config.fontSize);
  accessibility = form(this.state.config.accessibility);
  animations = form(this.state.config.animations);
}
