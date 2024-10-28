import {
  Component,
  HostListener,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { IconCogComponent } from './icons/icon-cog/icon-cog.component';
import { IconUpComponent } from './icons/icon-up/icon-up.component';
import { NgOptimizedImage } from '@angular/common';
import { filter, interval, switchMap, tap } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IconCogComponent, IconUpComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
})
export class AppComponent {
  swUpdate = inject(SwUpdate);

  constructor() {
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

    interval(60000)
      .pipe(switchMap(() => this.swUpdate.checkForUpdate()))
      .subscribe((updateAvailable) => {
        if (updateAvailable) console.log('Update available');
      });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollTopVisible = window.scrollY > 100;
  }

  scrollTopVisible = false;
}
