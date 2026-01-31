import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
  IconArrowBackComponent,
  IconArrowUpwardComponent,
  IconCogComponent,
  IconHelpComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { filter, map } from 'rxjs';

import { DialogComponent } from './dialog/dialog.component';
import { RouteData } from './pages/app.routes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IconCogComponent,
    DialogComponent,
    IconArrowUpwardComponent,
    IconArrowBackComponent,
    IconHelpComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full flex-col',
  },
})
export class AppComponent {
  private state = inject(GLOBAL_STATE);
  readonly overlayVisible = signal<boolean>(false);

  private router = inject(Router);
  private readonly routeData = toSignal<Partial<RouteData> | undefined>(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.routerState.root.snapshot.firstChild?.data),
    ),
  );

  readonly scrollTopVisible = computed(
    () => this.state.browser.scrollY() > 100,
  );

  readonly displayRuleHelpLink = computed(() => this.routeData()?.ruleHelp);

  readonly displayConfigLink = computed(() => this.routeData()?.config);

  readonly displayHistoryBackLink = computed(
    () => this.routeData()?.historyBack,
  );

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  go = this.state.router.go;
}
