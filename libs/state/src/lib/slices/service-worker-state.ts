import { signal } from '@angular/core';

export const serviceWorkerState = () => ({
  serviceWorker: {
    /** transient: status of the service worker */
    status: signal(
      'init' as
        | 'init'
        | 'ok'
        | 'error'
        | 'unrecoverable'
        | 'update-available'
        | 'disabled',
    ),
  },
});
