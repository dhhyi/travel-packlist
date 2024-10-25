import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  isDevMode,
  APP_INITIALIZER,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { AppInit } from './app.init';

function initializeApp(appInit: AppInit): () => void {
  return () => {
    appInit.init();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInit],
      multi: true,
    },
  ],
};
