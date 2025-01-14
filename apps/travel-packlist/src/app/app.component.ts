import {
  animate,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  signal,
  afterRender,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  IconArrowUpwardComponent,
  IconCogComponent,
} from '@travel-packlist/icons';
import { GLOBAL_STATE } from '@travel-packlist/state';
import { filter, map } from 'rxjs';

import { DialogComponent } from './dialog/dialog.component';

const slideTransition = animation(
  [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    query(':enter', style({ opacity: 0, transform: '{{ from }}' }), {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '{{ duration }}',
            style({ opacity: 0, transform: '{{ to }}' }),
          ),
        ],
        { optional: true },
      ),
      query(
        ':enter',
        [
          animate(
            '{{ duration }}',
            style({
              opacity: 1,
              transform: 'translateX(0) translateY(0) scale(1)',
            }),
          ),
        ],
        { optional: true },
      ),
    ]),
  ],
  { params: { duration: '0.3s ease-in-out' } },
);

const routeTransition = trigger('routeTransition', [
  transition(':decrement', [
    useAnimation(slideTransition, {
      params: {
        from: 'translateX(-100%) scale(1)',
        to: 'translateX(100%) scale(0.9)',
      },
    }),
  ]),
  transition(':increment', [
    useAnimation(slideTransition, {
      params: {
        from: 'translateX(100%) scale(1)',
        to: 'translateX(-100%) scale(0.9)',
      },
    }),
  ]),
]);

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
  animations: [routeTransition],
  styles: `
    :host {
      @apply flex h-full flex-col;
    }
  `,
})
export class AppComponent {
  private state = inject(GLOBAL_STATE);
  readonly overlayVisible = signal<boolean>(false);

  private router = inject(Router);
  private readonly routeData = toSignal<
    Partial<{ hierarchy: number }> | undefined
  >(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.routerState.root.snapshot.firstChild?.data),
    ),
  );

  readonly hierarchy = computed(() => this.routeData()?.hierarchy);

  readonly scrollTopVisible = computed(
    () => this.state.browser.scrollY() > 100,
  );

  readonly disableAnimations = signal(true);

  constructor() {
    afterRender(() => {
      this.disableAnimations.set(
        this.state.config.accessibility() === 'accessible',
      );
    });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
