import { effect, Signal, signal } from '@angular/core';

const createSignal = <T>(initialValue: T, triggerReset: Signal<boolean>) => {
  const newSignal = signal(initialValue);
  effect(() => {
    if (triggerReset()) {
      newSignal.set(initialValue);
    }
  });

  return newSignal;
};

export const transientState = (triggerReset: Signal<boolean>) => {
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
