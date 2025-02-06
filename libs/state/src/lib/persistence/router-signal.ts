import { effect, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { RESET_SIGNAL } from '../state-builder';

export const createRouterSignalState = <K>(key: string, defaultValue: K) => {
  const router = inject(Router);
  const route = inject(ActivatedRoute);
  const triggerReset = inject(RESET_SIGNAL);
  const manualState = signal(undefined) as WritableSignal<K>;
  router.events
    .pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => (route.snapshot.queryParams[key] as K) ?? defaultValue),
    )
    .subscribe((v) => {
      if (v !== '') {
        manualState.set(v);
      }
    });
  effect(() => {
    let manualValue = manualState() || undefined;
    if (manualValue === defaultValue) {
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
      manualState.set(defaultValue);
    }
  });
  return manualState;
};
