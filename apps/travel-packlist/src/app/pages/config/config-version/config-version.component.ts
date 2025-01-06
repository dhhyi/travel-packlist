import { DatePipe, SlicePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GlobalState } from '@travel-packlist/state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-config-version',
  templateUrl: './config-version.component.html',
  styleUrl: '../config-section.scss',
  imports: [DatePipe, SlicePipe],
})
export class ConfigVersionComponent {
  private state = inject(GlobalState);

  displayServiceWorkerStatus = !ANDROID;
  displayVersionCode = ANDROID;

  buildTime = BUILD_TIME;
  version = VERSION;
  gitHash = GIT_HASH;
  versionCode = VERSION_CODE;

  readonly currentVersionLabel =
    $localize`:@@config.version.current:Current version is ${this.version}:VERSION:` as string;

  readonly serviceWorkerStatus = computed((): string => {
    switch (this.state.signal('serviceWorkerStatus')()) {
      case 'disabled':
        return $localize`:@@config.service-worker.disabled:disabled` as string;
      case 'error':
        return $localize`:@@config.service-worker.error:error` as string;
      case 'unrecoverable':
        return $localize`:@@config.service-worker.unrecoverable:unrecoverable - please refresh` as string;
      case 'init':
        return $localize`:@@config.service-worker.init:initializing` as string;
      case 'ok':
        return $localize`:@@config.service-worker.ok:ok` as string;
      case 'update-available':
        return $localize`:@@config.service-worker.update-available:update available` as string;
    }
  });
}
