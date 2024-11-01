/* eslint-disable @typescript-eslint/unified-signatures */
import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import {
  PersistentState,
  persistentStateKeys,
  PersistentStateType,
} from './persistent-state';
import { DerivedState, DerivedStateType } from './derived-state';
import { RouterState, routerStateKeys, RouterStateType } from './router-state';
import {
  SessionState,
  sessionStateKeys,
  SessionStateType,
} from './session-state';

export type State = PersistentStateType & DerivedStateType;

export type Themes = State['theme'];
export type Languages = State['language'];

function isPersistentStateKey(key: string): key is keyof PersistentStateType {
  return persistentStateKeys.includes(key as keyof PersistentStateType);
}

function isRouterStateKey(key: string): key is keyof RouterStateType {
  return routerStateKeys.includes(key as keyof RouterStateType);
}

function isSessionStateKey(key: string): key is keyof SessionStateType {
  return sessionStateKeys.includes(key as keyof SessionStateType);
}

@Injectable({ providedIn: 'root' })
export class GlobalState {
  private persistent = inject(PersistentState);
  private router = inject(RouterState);
  private session = inject(SessionState);
  private derived = inject(DerivedState);

  get<K extends keyof PersistentStateType>(key: K): PersistentStateType[K];
  get<K extends keyof RouterStateType>(key: K): RouterStateType[K];
  get<K extends keyof SessionStateType>(key: K): SessionStateType[K];
  get<K extends keyof DerivedStateType>(key: K): DerivedStateType[K];
  get<K extends keyof State>(key: K) {
    if (isPersistentStateKey(key)) {
      return this.persistent.get(key);
    } else if (isRouterStateKey(key)) {
      return this.router.get(key);
    } else if (isSessionStateKey(key)) {
      return this.session.get(key);
    } else {
      return this.derived.get(key);
    }
  }

  signal<K extends keyof PersistentStateType>(
    key: K,
  ): WritableSignal<PersistentStateType[K]>;
  signal<K extends keyof RouterStateType>(
    key: K,
  ): WritableSignal<RouterStateType[K]>;
  signal<K extends keyof SessionStateType>(
    key: K,
  ): WritableSignal<SessionStateType[K]>;
  signal<K extends keyof DerivedStateType>(key: K): Signal<DerivedStateType[K]>;
  signal<K extends keyof State>(key: K) {
    if (isPersistentStateKey(key)) {
      return this.persistent.signal(key);
    } else if (isRouterStateKey(key)) {
      return this.router.signal(key);
    } else if (isSessionStateKey(key)) {
      return this.session.signal(key);
    } else {
      return this.derived.signal(key);
    }
  }

  set<K extends keyof RouterStateType>(key: K, value: RouterStateType[K]): void;
  set<K extends keyof SessionStateType>(
    key: K,
    value: SessionStateType[K],
  ): void;
  set<K extends keyof PersistentStateType>(
    key: K,
    value: PersistentStateType[K],
  ): void;
  set<K extends keyof State>(key: K, value: unknown) {
    if (isPersistentStateKey(key)) {
      this.persistent.signal(key).set(value as PersistentStateType[typeof key]);
    } else if (isRouterStateKey(key)) {
      this.router.set(key, value as RouterStateType[typeof key]);
    } else if (isSessionStateKey(key)) {
      this.session.set(key, value as SessionStateType[typeof key]);
    }
  }

  resetChecklist() {
    this.persistent.resetChecklist();
  }

  reset() {
    this.persistent.reset();
    this.session.reset();
  }
}
