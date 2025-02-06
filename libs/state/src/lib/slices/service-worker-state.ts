import { signal } from '@angular/core';

export const serviceWorkerState = () => {
  return {
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
  };
};
