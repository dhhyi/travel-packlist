import { effect, inject, Signal, signal } from '@angular/core';

import { RESET_SIGNAL } from '../state-builder';

const createSignal = <T>(initialValue: T, triggerReset: Signal<boolean>) => {
  const newSignal = signal(initialValue);
  effect(() => {
    if (triggerReset()) {
      newSignal.set(initialValue);
    }
  });

  return newSignal;
};

export const transientState = () => {
  const triggerReset = inject(RESET_SIGNAL);
  return {
    serviceWorker: {
      /** transient: status of the service worker */
      status: createSignal(
        'init' as
          | 'init'
          | 'ok'
          | 'error'
          | 'unrecoverable'
          | 'update-available'
          | 'disabled',
        triggerReset,
      ),
    },
  };
};
