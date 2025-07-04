import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GLOBAL_STATE } from '@travel-packlist/state';

@Component({
  selector: 'app-config-version',
  imports: [DatePipe],
  templateUrl: './config-version.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigVersionComponent {
  private state = inject(GLOBAL_STATE);

  displayServiceWorkerStatus = !ANDROID;
  displayVersionCode = ANDROID;

  buildTime = BUILD_TIME;
  version = VERSION;
  commitsSince = COMMITS_SINCE;
  gitHash = GIT_HASH;
  versionCode = VERSION_CODE;

  readonly currentVersionLabel = $localize`Current version is ${this.version}:VERSION:`;
  readonly gitHashLabel = this.gitHash
    ? $localize`Current git hash starts with ${this.gitHash.substring(0, 8)}:GIT_HASH:`
    : undefined;

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
