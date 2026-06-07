import { signal } from '@angular/core';

export const serviceWorkerState = () => ({
  serviceWorker: {
    /** transient: status of the service worker */
    status: signal<
      | 'init'
      | 'ok'
      | 'error'
      | 'unrecoverable'
      | 'update-available'
      | 'disabled'
    >('init'),
  },
});
