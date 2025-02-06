import { effect, inject, signal } from '@angular/core';

import { RESET_SIGNAL } from '../state-builder';

function load(key: string) {
  const state = sessionStorage.getItem('state') ?? '{}';
  return (JSON.parse(state) as Record<string, unknown>)[key];
}

function save(key: string, value: unknown) {
  const state = JSON.parse(sessionStorage.getItem('state') ?? '{}') as Record<
    string,
    unknown
  >;
  state[key] = value;
  sessionStorage.setItem('state', JSON.stringify(state));
}

export const createSessionSignalState = <K>(key: string, defaultValue: K) => {
  const triggerReset = inject(RESET_SIGNAL);
  const newSignal = signal((load(key) as K) ?? defaultValue);
  effect(
    () => {
      const newValue = newSignal();
      if (newValue !== load(key)) {
        save(key, newValue);
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
};
