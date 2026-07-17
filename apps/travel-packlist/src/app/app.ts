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
  IconArrowBack,
  IconArrowUpward,
  IconCog,
  IconHelp,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { filter, map } from 'rxjs';

import { Dialog } from './dialog/dialog';
import { RouteData } from './pages/app.routes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IconCog,
    Dialog,
    IconArrowUpward,
    IconArrowBack,
    IconHelp,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full flex-col',
  },
})
export class App {
  private state = inject(GLOBAL_STATE);
  private router = inject(Router);
  private readonly routeData = toSignal<Partial<RouteData> | undefined>(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.routerState.root.snapshot.firstChild?.data),
    ),
  );
  readonly displayRuleHelpLink = computed(() => this.routeData()?.ruleHelp);
  readonly displayConfigLink = computed(() => this.routeData()?.config);

  readonly overlayVisible = signal(false);

  readonly displayHistoryBackLink = computed(
    () => this.routeData()?.historyBack,
  );

  readonly scrollTopVisible = computed(
    () => this.state.browser.scrollY() > 100,
  );

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  go = this.state.router.go;
}
