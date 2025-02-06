import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-version',
  templateUrl: './config-version.component.html',
  styleUrl: '../config-section.css',
  imports: [DatePipe],
})
export class ConfigVersionComponent {
  private state = inject(GLOBAL_STATE);

  displayServiceWorkerStatus = !ANDROID;
  displayVersionCode = ANDROID;

  buildTime = BUILD_TIME;
  version = VERSION;
  gitHash = GIT_HASH;
  versionCode = VERSION_CODE;

  readonly currentVersionLabel = $localize`Current version is ${this.version}:VERSION:`;
  readonly gitHashLabel = $localize`Current git hash starts with ${this.gitHash.substring(0, 8)}:GIT_HASH:`;

  readonly serviceWorkerStatus = computed((): string => {
    switch (this.state.serviceWorker.status()) {
      case 'disabled':
        return $localize`disabled`;
      case 'error':
        return $localize`error`;
      case 'unrecoverable':
        return $localize`unrecoverable - please refresh`;
      case 'init':
        return $localize`initializing`;
      case 'ok':
        return $localize`ok`;
      case 'update-available':
        return $localize`update available`;
    }
  });
}
