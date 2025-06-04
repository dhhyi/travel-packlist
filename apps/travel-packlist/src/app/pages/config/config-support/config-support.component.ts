import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-config-support',
  templateUrl: './config-support.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigSupportComponent {
  displayKoFi = !ANDROID;
}
