import { Injectable, signal, WritableSignal } from '@angular/core';

import { ReadWriteState } from './types';

const initialState = {
  serviceWorkerStatus: 'init' as
    | 'init'
    | 'ok'
    | 'error'
    | 'unrecoverable'
    | 'update-available'
    | 'disabled',
};

export type TransientStateType = typeof initialState;
type Keys = keyof TransientStateType;
export const transientStateKeys = Object.keys(initialState) as Keys[];

@Injectable({ providedIn: 'root' })
export class TransientState implements ReadWriteState<TransientStateType> {
  private signalMap = new Map<Keys, WritableSignal<TransientStateType[Keys]>>();

  constructor() {
    this.initializeSignals();
  }

  private initializeSignals() {
    for (const key of transientStateKeys) {
      const newSignal = signal(initialState[key]);
      this.signalMap.set(key, newSignal);
    }
  }

  handles(key: string): key is Keys {
    return transientStateKeys.includes(key as Keys);
  }

  signal<K extends Keys>(key: K): WritableSignal<TransientStateType[K]> {
    return this.signalMap.get(key) as WritableSignal<TransientStateType[K]>;
  }

  get<K extends Keys>(key: K): TransientStateType[K] {
    return this.signal(key)();
  }

  set<K extends Keys>(key: K, value: TransientStateType[K]): void {
    this.signal(key).set(value);
  }

  reset(): void {
    for (const key of transientStateKeys) {
      this.signal(key).set(initialState[key]);
    }
  }
}
