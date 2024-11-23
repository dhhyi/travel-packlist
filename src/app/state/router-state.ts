import {
  inject,
  Injectable,
  WritableSignal,
  signal,
  effect,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { ReadWriteState } from './types';

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

export type RouterStateType = Partial<typeof initialState>;
type Keys = keyof RouterStateType;
export const routerStateKeys = Object.keys(initialState) as Keys[];

@Injectable({ providedIn: 'root' })
export class RouterState implements ReadWriteState<RouterStateType> {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private signalMap = new Map<Keys, WritableSignal<RouterStateType[Keys]>>();

  constructor() {
    for (const key of routerStateKeys) {
      this.signalMap.set(key, this.createSignal(key));
    }
  }

  private createSignal<K extends Keys>(
    key: K,
  ): WritableSignal<RouterStateType[K]> {
    const manualState = signal(undefined as RouterStateType[K]);
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(
          () =>
            (this.route.snapshot.queryParams[key] as RouterStateType[K]) ??
            initialState[key],
        ),
      )
      .subscribe((v) => {
        if (v !== '') manualState.set(v);
      });
    effect(() => {
      let manualValue = manualState() || undefined;
      if (manualValue === initialState[key]) {
        manualValue = undefined;
      }
      if (this.route.snapshot.queryParams[key] !== manualValue) {
        void this.router.navigate([], {
          queryParams: { [key]: manualValue },
          queryParamsHandling: 'merge',
          relativeTo: this.route,
          replaceUrl: true,
        });
      }
    });
    return manualState;
  }

  handles(key: string): key is Keys {
    return routerStateKeys.includes(key as Keys);
  }

  signal<K extends Keys>(key: K): WritableSignal<RouterStateType[K]> {
    return this.signalMap.get(key) as WritableSignal<RouterStateType[K]>;
  }

  get<K extends Keys>(key: K): RouterStateType[K] {
    return this.signal(key)();
  }

  set<K extends Keys>(key: K, value: RouterStateType[K]) {
    this.signal(key).set(value);
  }

  reset(): void {
    for (const key of routerStateKeys) {
      this.signal(key).set(undefined);
    }
  }
}
