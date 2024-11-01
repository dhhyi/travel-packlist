import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

const defaultState = {
  rulesMode: 'view' as
    | 'view'
    | 'delete'
    | 'edit'
    | 'cut-paste'
    | 'swap'
    | 'search',
  filterRulesQuery: '',
};

export type RouterStateType = Partial<typeof defaultState>;
type Keys = keyof RouterStateType;
export const routerStateKeys = Object.keys(defaultState) as Keys[];

@Injectable({ providedIn: 'root' })
export class RouterState {
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
    const routerState = toSignal(
      this.route.queryParamMap.pipe(
        map((queryParamMap) => queryParamMap.get(key) ?? defaultState[key]),
      ),
    ) as Signal<RouterStateType[K]>;
    const set = (value: RouterStateType[K]) => {
      void this.router.navigate([], {
        queryParams: { [key]: value },
        queryParamsHandling: 'merge',
        relativeTo: this.route,
        replaceUrl: true,
      });
    };
    const update = (fn: (value: RouterStateType[K]) => RouterStateType[K]) => {
      set(fn(routerState()));
    };
    return Object.assign(() => routerState(), {
      set,
      update,
      asReadonly: routerState,
    }) as unknown as WritableSignal<RouterStateType[K]>;
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
}
