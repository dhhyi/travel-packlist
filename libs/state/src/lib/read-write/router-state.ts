import { inject, WritableSignal, signal, effect, Signal } from '@angular/core';
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

export const routerState = (triggerReset: Signal<boolean>) => {
  return {
    router: {
      /** router: mode of the editor */
      rulesMode: createSignal('rulesMode', triggerReset),
      /** router: filter query for rules in editor */
      filterRulesQuery: createSignal('filterRulesQuery', triggerReset),
    },
  };
};
