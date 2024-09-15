import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { IconCogComponent } from './icons/icon-cog/icon-cog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IconCogComponent],
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
}
