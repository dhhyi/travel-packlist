import { inject, WritableSignal, signal, effect, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

const initialState = {
  rulesMode: 'view' as
    | 'view'
    | 'delete'
    | 'edit'
    | 'cut-paste'
    | 'swap'
    | 'search',
  filterRulesQuery: undefined as string | undefined,
};

type State = typeof initialState;

export type RuleModes = State['rulesMode'];

const createSignal = <K extends keyof State>(
  key: K,
  triggerReset: Signal<boolean>,
) => {
  const router = inject(Router);
  const route = inject(ActivatedRoute);
  const manualState = signal(undefined) as WritableSignal<State[K]>;
  router.events
    .pipe(
      filter((e) => e instanceof NavigationEnd),
      map(
        () =>
          (route.snapshot.queryParams[key] as State[typeof key]) ??
          initialState[key],
      ),
    )
    .subscribe((v) => {
      if (v !== '') {
        manualState.set(v);
      }
    });
  effect(() => {
    let manualValue = manualState() || undefined;
    if (manualValue === initialState[key]) {
      manualValue = undefined;
    }
    if (route.snapshot.queryParams[key] !== manualValue) {
      void router.navigate([], {
        queryParams: { [key]: manualValue },
        queryParamsHandling: 'merge',
        relativeTo: route,
        replaceUrl: true,
      });
    }
  });
  effect(() => {
    if (triggerReset()) {
      manualState.set(initialState[key]);
    }
  });
  return manualState;
};

interface NavThis {
  router: Router;
  rulesMode: WritableSignal<RuleModes>;
}

const navigation = {
  packlist(this: NavThis) {
    void this.router.navigate(['/packlist']);
  },
  rules(this: NavThis) {
    void this.router.navigate(['/rules']);
  },
  documentation(this: NavThis) {
    void this.router.navigate(['/documentation']);
  },
  'rules-raw'(this: NavThis) {
    void this.router.navigate(['/rules-raw']);
  },
  'rules->edit'(this: NavThis) {
    void this.router.navigate(['/rules']).then(() => {
      this.rulesMode.set('edit');
    });
  },
  'config#import'(this: NavThis) {
    void this.router.navigate(['/config'], { fragment: 'import' });
  },
  'config#export'(this: NavThis) {
    void this.router.navigate(['/config'], { fragment: 'export-now' });
  },
};

export const routerState = (triggerReset: Signal<boolean>) => {
  const router = inject(Router);
  const route = inject(ActivatedRoute);
  const rulesMode = createSignal('rulesMode', triggerReset);
  return {
    router: {
      /** router: mode of the editor */
      rulesMode,
      /** router: filter query for rules in editor */
      filterRulesQuery: createSignal('filterRulesQuery', triggerReset),
      /** router read-only: current fragment */
      fragment: toSignal(route.fragment) as Signal<string | undefined>,
      /** router: navigate to a page */
      go: (page: keyof typeof navigation) => {
        navigation[page].call({ router, rulesMode });
      },
    },
  };
};
