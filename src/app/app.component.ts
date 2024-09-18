import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { IconCogComponent } from './icons/icon-cog/icon-cog.component';
import { IconUpComponent } from './icons/icon-up/icon-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IconCogComponent, IconUpComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  swUpdate = inject(SwUpdate);

  constructor() {
    this.swUpdate.versionUpdates.subscribe((event) => {
      if (event.type === 'VERSION_READY') {
        this.swUpdate.activateUpdate().then(() => {
          window.location.reload();
        });
      }
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
