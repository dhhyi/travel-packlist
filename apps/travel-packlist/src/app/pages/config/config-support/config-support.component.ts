import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-support',
  templateUrl: './config-support.component.html',
  styleUrl: '../config-section.scss',
})
export class ConfigSupportComponent {
  displayKoFi = !ANDROID;
}
