import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import {
  PersistentState,
  persistentStateKeys,
  PersistentStateType,
} from './persistent-state';
import { DerivedState, DerivedStateType } from './derived-state';

export type State = PersistentStateType & DerivedStateType;

export type Themes = State['theme'];
export type Languages = State['language'];

function isPersistentStateKey(key: string): key is keyof PersistentStateType {
  return persistentStateKeys.includes(key as keyof PersistentStateType);
}

@Injectable({ providedIn: 'root' })
export class GlobalState {
  private persistent = inject(PersistentState);
  private derived = inject(DerivedState);

  get<K extends keyof PersistentStateType>(key: K): PersistentStateType[K];
  get<K extends keyof DerivedStateType>(key: K): DerivedStateType[K];
  get<K extends keyof State>(key: K) {
    if (isPersistentStateKey(key)) {
      return this.persistent.get(key);
    } else {
      return this.derived.get(key);
    }
  }

  signal<K extends keyof PersistentStateType>(
    key: K,
  ): WritableSignal<PersistentStateType[K]>;
  signal<K extends keyof DerivedStateType>(key: K): Signal<DerivedStateType[K]>;
  signal<K extends keyof State>(key: K) {
    if (isPersistentStateKey(key)) {
      return this.persistent.signal(key);
    } else {
      return this.derived.signal(key);
    }
  }

  set<K extends keyof PersistentStateType>(
    key: K,
    value: PersistentStateType[K],
  ) {
    this.persistent.set(key, value);
  }

  resetChecklist() {
    this.persistent.resetChecklist();
  }

  reset() {
    this.persistent.reset();
  }
}
