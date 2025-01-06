import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '@travel-packlist/components';
import { FlagGermanyComponent, FlagUkComponent } from '@travel-packlist/icons';
import { GlobalState } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-appearance',
  templateUrl: './config-appearance.component.html',
  styleUrl: '../config-section.scss',
  imports: [
    FormsModule,
    ComponentsModule,
    FlagGermanyComponent,
    FlagUkComponent,
  ],
})
export class ConfigAppearanceComponent {
  private state = inject(GlobalState);
  theme = this.state.signal('theme');
  language = this.state.signal('language');
  fontSize = this.state.signal('fontSize');
  accessibility = this.state.signal('accessibility');
}
