import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IconArrowUpwardComponent,
  IconCogComponent,
} from '@travel-packlist/icons';
import { GlobalState } from '@travel-packlist/state';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    RouterModule,
    IconCogComponent,
    DialogComponent,
    IconArrowUpwardComponent,
  ],
  templateUrl: './app.component.html',
  styles: `
    :host {
      @apply flex h-full flex-col;
    }
  `,
})
export class AppComponent {
  private state = inject(GlobalState);

  readonly scrollTopVisible = computed(
    () => this.state.signal('scrollY')() > 100,
  );

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
