import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import {
  PersistentState,
  persistentStateKeys,
  PersistentStateType,
} from './persistent-state';
import { DerivedState, DerivedStateType } from './derived-state';
import { RouterState, routerStateKeys, RouterStateType } from './router-state';

export type State = PersistentStateType & DerivedStateType;

export type Themes = State['theme'];
export type Languages = State['language'];

function isPersistentStateKey(key: string): key is keyof PersistentStateType {
  return persistentStateKeys.includes(key as keyof PersistentStateType);
}

function isRouterStateKey(key: string): key is keyof RouterStateType {
  return routerStateKeys.includes(key as keyof RouterStateType);
}

@Injectable({ providedIn: 'root' })
export class GlobalState {
  private persistent = inject(PersistentState);
  private derived = inject(DerivedState);
  private router = inject(RouterState);

  get<K extends keyof PersistentStateType>(key: K): PersistentStateType[K];
  get<K extends keyof DerivedStateType>(key: K): DerivedStateType[K];
  get<K extends keyof RouterStateType>(key: K): RouterStateType[K];
  get<K extends keyof State>(key: K) {
    if (isPersistentStateKey(key)) {
      return this.persistent.get(key);
    } else if (isRouterStateKey(key)) {
      return this.router.get(key);
    } else {
      return this.derived.get(key);
    }
  }

  signal<K extends keyof PersistentStateType>(
    key: K,
  ): WritableSignal<PersistentStateType[K]>;
  signal<K extends keyof DerivedStateType>(key: K): Signal<DerivedStateType[K]>;
  signal<K extends keyof RouterStateType>(
    key: K,
  ): WritableSignal<RouterStateType[K]>;
  signal<K extends keyof State>(key: K) {
    if (isPersistentStateKey(key)) {
      return this.persistent.signal(key);
    } else if (isRouterStateKey(key)) {
      return this.router.signal(key);
    } else {
      return this.derived.signal(key);
    }
  }

  set<K extends keyof RouterStateType>(key: K, value: RouterStateType[K]): void;
  set<K extends keyof PersistentStateType>(
    key: K,
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    value: PersistentStateType[K],
  ): void;
  set<K extends keyof State>(key: K, value: unknown) {
    if (isPersistentStateKey(key)) {
      this.persistent.signal(key).set(value as PersistentStateType[typeof key]);
    } else if (isRouterStateKey(key)) {
      this.router.set(key, value as RouterStateType[typeof key]);
    }
  }

  resetChecklist() {
    this.persistent.resetChecklist();
  }

  reset() {
    this.persistent.reset();
  }
}
