import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-config-support',
  templateUrl: './config-support.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigSupport {
  displayKoFi = !ANDROID;
}
