import {
  ApplicationConfig,
  inject,
  // eslint-disable-next-line no-restricted-imports
  Injector,
  isDevMode,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
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

function initParserConfig(injector: Injector): ParserConfig {
  return {
    isTrackWeight: () => injector.get(GLOBAL_STATE).config.trackWeight(),
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouting(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode() && !ANDROID,
      registrationStrategy: 'registerImmediately',
    }),
    provideAnimationsAsync(),
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
      deps: [Injector],
      provide: PARSER_CONFIG_PROVIDER,
      useFactory: initParserConfig,
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
