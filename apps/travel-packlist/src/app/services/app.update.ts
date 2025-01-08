import { inject, Injectable } from '@angular/core';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';
import { GlobalState } from '@travel-packlist/state';
import { tap, filter, interval, switchMap, identity, merge } from 'rxjs';

import { confirm } from '../dialog';

@Injectable({ providedIn: 'root' })
export class AppUpdate {
  private swUpdate = inject(SwUpdate);
  private status = inject(GlobalState).signal('serviceWorkerStatus');

  init() {
    merge(this.swUpdate.versionUpdates, this.swUpdate.unrecoverable)
      .pipe(
        tap((event) => {
          if (event.type === 'VERSION_INSTALLATION_FAILED') {
            this.status.set('error');
            console.error('Version installation failed\n', event.error);
          } else if (event.type === 'NO_NEW_VERSION_DETECTED') {
            this.status.set('ok');
          } else if (
            event.type === 'VERSION_READY' ||
            event.type === 'VERSION_DETECTED'
          ) {
            this.status.set('update-available');
          } else {
            const unrecoverable: UnrecoverableStateEvent = event;
            this.status.set('unrecoverable');
            console.error('Unrecoverable state\n', unrecoverable.reason);
          }
        }),
        filter((event) => event.type === 'VERSION_READY'),
        switchMap(() =>
          confirm(
            $localize`A new version of the app is available. Do you want to reload?`,
          ),
        ),
        filter(identity),
      )
      .subscribe(() => {
        window.location.reload();
      });

    if (this.swUpdate.isEnabled) {
      interval(60000)
        .pipe(switchMap(() => this.swUpdate.checkForUpdate()))
        .subscribe((updateAvailable) => {
          if (updateAvailable) {
            console.log('Update available');
          }
        });
    } else {
      this.status.set('disabled');
      console.warn('Service worker updates are disabled/unavailable');
    }
  }
}
