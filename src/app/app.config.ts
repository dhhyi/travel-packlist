import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  isDevMode,
  inject,
  provideAppInitializer,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';

import { routes } from './pages/app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { AppInit } from './services/app.init';
import { PARSER_CONFIG_PROVIDER, ParserConfig } from './model/parser';
import { GlobalState } from './state/global-state';
import { AppUpdate } from './services/app.update';
import { RulesExportReminder } from './services/rules.export-reminder';
import { AndroidRulesShare } from './services/rules-share/android-rules-share';
import { WebRulesShare } from './services/rules-share/web-rules-share';
import { RulesShare } from './services/rules-share/rules-share.interface';

function initParserConfig(globalState: GlobalState): ParserConfig {
  return {
    isTrackWeight: globalState.signal('trackWeight'),
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withHashLocation(), withComponentInputBinding()),
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
    {
      provide: PARSER_CONFIG_PROVIDER,
      useFactory: initParserConfig,
      deps: [GlobalState],
    },
    {
      provide: RulesShare,
      useClass: ANDROID ? AndroidRulesShare : WebRulesShare,
    },
  ],
};
