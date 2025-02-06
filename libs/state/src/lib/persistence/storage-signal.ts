import { effect, inject, signal, WritableSignal } from '@angular/core';

import { RESET_SIGNAL } from '../state-builder';

function isEqual(a: unknown, b: unknown): boolean {
  if (typeof a !== typeof b) {
    return false;
  }
  if (!!a && !!b && typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    return (
      keysA.length === keysB.length &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      keysA.every((key) => isEqual((a as any)[key], (b as any)[key]))
    );
  }
  return a === b;
}

function load<K>(this: Storage, key: string, defaultValue: K): K {
  const state = this.getItem('state') ?? '{}';
  return (JSON.parse(state) as Record<string, K>)[key] ?? defaultValue;
}

function save<K>(this: Storage, key: string, value: K, defaultValue: K) {
  const state = this.getItem('state') ?? '{}';
  const parsed = JSON.parse(state) as Record<string, K>;
  if (isEqual(value, defaultValue)) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete parsed[key];
  } else {
    parsed[key] = value;
  }
  this.setItem('state', JSON.stringify(parsed));
}

function createStorageSignalState<K>(
  storage: Storage,
  key: string,
  defaultValue: K,
) {
  const triggerReset = inject(RESET_SIGNAL);
  const newSignal = signal(
    load.call(storage, key, defaultValue),
  ) as WritableSignal<K>;
  effect(
    () => {
      const newValue = newSignal();
      if (newValue !== load.call(storage, key, defaultValue)) {
        save.call(storage, key, newValue, defaultValue);
      }
    },
    { manualCleanup: true },
  );
  effect(() => {
    if (triggerReset()) {
      newSignal.set(defaultValue);
    }
  });
  return newSignal;
}

export const createLocalStorageSignalState = <K>(
  key: string,
  defaultValue: K,
) => createStorageSignalState(localStorage, key, defaultValue);

export const createSessionStorageSignalState = <K>(
  key: string,
  defaultValue: K,
) => createStorageSignalState(sessionStorage, key, defaultValue);
