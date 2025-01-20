import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SelectOptionsComponent,
  SelectOptionDirective,
} from '@travel-packlist/components';
import { FlagGermanyComponent, FlagUkComponent } from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-appearance',
  templateUrl: './config-appearance.component.html',
  styleUrl: '../config-section.scss',
  imports: [
    FormsModule,
    SelectOptionsComponent,
    SelectOptionDirective,
    FlagGermanyComponent,
    FlagUkComponent,
  ],
})
export class ConfigAppearanceComponent {
  private state = inject(GLOBAL_STATE);
  theme = this.state.config.theme;
  language = this.state.config.language;
  fontSize = this.state.config.fontSize;
  accessibility = this.state.config.accessibility;
}
