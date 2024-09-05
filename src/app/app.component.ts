import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-packlist';

  swUpdate = inject(SwUpdate);

  constructor() {
    this.swUpdate.versionUpdates.subscribe((event) => {
      if (event.type === 'VERSION_READY') {
        window.alert('Reloading new Version');
        this.swUpdate.activateUpdate().then(() => {
          window.location.reload();
        });
      }
    });
  }
}
