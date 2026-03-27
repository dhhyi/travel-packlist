import {
  ApplicationConfig,
  inject,
  // eslint-disable-next-line no-restricted-imports
  Injector,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { provideDocumentationTopics } from '@travel-packlist/documentation';
import { PARSER_CONFIG_PROVIDER, ParserConfig } from '@travel-packlist/model';
import { provideRulesTemplates } from '@travel-packlist/rules-template';
import {
  CAPACITOR_HTTP_REQUEST_MODE,
  GLOBAL_STATE,
} from '@travel-packlist/state';

import { provideRouting } from './pages/app.routes';
import { AppInit } from './services/app.init';
import { AppUpdate } from './services/app.update';
import { AndroidRulesShare } from './services/rules-share/android-rules-share';
import { RulesShare } from './services/rules-share/rules-share.interface';
import { WebRulesShare } from './services/rules-share/web-rules-share';
import { RulesExportReminder } from './services/rules.export-reminder';
import { ScrollIntoView } from './services/scroll-into-view';
import { WeightTrackingCheck } from './services/weight-tracking';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouting(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode() && !ANDROID,
      registrationStrategy: 'registerImmediately',
    }),
    provideAppInitializer(() => {
      inject(AppInit).init();
    }),
    provideAppInitializer(() => {
      inject(AppUpdate).init();
    }),
    provideAppInitializer(() => {
      inject(RulesExportReminder).init();
    }),
    provideAppInitializer(() => {
      inject(WeightTrackingCheck).init();
    }),
    provideAppInitializer(() => {
      inject(ScrollIntoView).init();
    }),
    {
      provide: PARSER_CONFIG_PROVIDER,
      useFactory: (): ParserConfig => {
        const injector = inject(Injector);
        return {
          // needs to remain a function to avoid circular dependency
          isTrackWeight: () => injector.get(GLOBAL_STATE).config.trackWeight(),
        };
      },
    },
    {
      provide: RulesShare,
      useClass: ANDROID ? AndroidRulesShare : WebRulesShare,
    },
    provideDocumentationTopics(),
    provideRulesTemplates(),
    {
      provide: CAPACITOR_HTTP_REQUEST_MODE,
      useValue: ANDROID ? 'no-cors' : 'cors',
    },
  ],
};
