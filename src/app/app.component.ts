import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { DialogComponent } from './dialog/dialog.component';
import { IconCogComponent } from './icons/icon-cog/icon-cog.component';
import { IconUpComponent } from './icons/icon-up/icon-up.component';
import { GlobalState } from './state/global-state';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterModule, IconCogComponent, IconUpComponent, DialogComponent],
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
