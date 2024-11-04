import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import { PersistentState, PersistentStateType } from './persistent-state';
import { DerivedState, DerivedStateType } from './derived-state';
import { RouterState, RouterStateType } from './router-state';
import { SessionState, SessionStateType } from './session-state';

type RWState = PersistentStateType & RouterStateType & SessionStateType;
type ROState = DerivedStateType;
type State = ROState & RWState;

export type Themes = State['theme'];
export type Languages = State['language'];

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
  get(key: string) {
    if (this.persistent.handles(key)) {
      return this.persistent.get(key);
    } else if (this.router.handles(key)) {
      return this.router.get(key);
    } else if (this.session.handles(key)) {
      return this.session.get(key);
    } else if (this.derived.handles(key)) {
      return this.derived.get(key);
    }
    throw new Error(`Key ${key} not handled in state`);
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
  signal(key: string) {
    if (this.persistent.handles(key)) {
      return this.persistent.signal(key);
    } else if (this.router.handles(key)) {
      return this.router.signal(key);
    } else if (this.session.handles(key)) {
      return this.session.signal(key);
    } else if (this.derived.handles(key)) {
      return this.derived.signal(key);
    }
    throw new Error(`Key ${key} not handled in state`);
  }

  /* eslint-disable @typescript-eslint/unified-signatures */
  set<K extends keyof PersistentStateType>(
    key: K,
    value: PersistentStateType[K],
  ): void;
  set<K extends keyof SessionStateType>(
    key: K,
    value: SessionStateType[K],
  ): void;
  set<K extends keyof RouterStateType>(key: K, value: RouterStateType[K]): void;
  /* eslint-enable @typescript-eslint/unified-signatures */
  set(key: string, value: unknown) {
    if (this.persistent.handles(key)) {
      this.persistent.signal(key).set(value as PersistentStateType[typeof key]);
    } else if (this.router.handles(key)) {
      this.router.set(key, value as RouterStateType[typeof key]);
    } else if (this.session.handles(key)) {
      this.session.set(key, value as SessionStateType[typeof key]);
    } else if (this.derived.handles(key)) {
      throw new Error(`Key is derived and cannot be set`);
    } else {
      throw new Error(`Key ${key} not handled in state`);
    }
  }

  reset() {
    this.persistent.reset();
    this.session.reset();
    this.router.reset();
  }
}
