import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import {
  Checkbox,
  SelectOption,
  SelectOptions,
} from '@travel-packlist/components';
import { FlagGermany, FlagUk } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-appearance',
  imports: [
    SelectOptions,
    SelectOption,
    FlagGermany,
    FlagUk,
    Checkbox,
    FormField,
  ],
  templateUrl: './config-appearance.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigAppearance {
  private state = inject(GLOBAL_STATE);
  theme = form(this.state.config.theme);
  language = form(this.state.config.language);
  fontSize = form(this.state.config.fontSize);
  accessibility = form(this.state.config.accessibility);
  animations = form(this.state.config.animations);
}
