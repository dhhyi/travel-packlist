import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { tap, filter, interval, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppUpdate {
  private swUpdate = inject(SwUpdate);

  init() {
    this.swUpdate.versionUpdates
      .pipe(
        tap((event) => {
          if (event.type === 'VERSION_INSTALLATION_FAILED') {
            console.error('Version installation failed\n', event.error);
          }
        }),
        filter((event) => event.type === 'VERSION_READY'),
      )
      .subscribe(() => {
        if (
          window.confirm(
            $localize`:@@app.update.apply.question:A new version of the app is available. Do you want to reload?` as string,
          )
        ) {
          window.location.reload();
        }
      });

    if (this.swUpdate.isEnabled) {
      interval(60000)
        .pipe(switchMap(() => this.swUpdate.checkForUpdate()))
        .subscribe((updateAvailable) => {
          if (updateAvailable) console.log('Update available');
        });
    } else {
      console.warn('Service worker updates are disabled/unavailable');
    }
  }
}
