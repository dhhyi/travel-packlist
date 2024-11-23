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
import { provideServiceWorker } from '@angular/service-worker';

import { PARSER_CONFIG_PROVIDER, ParserConfig } from './model/parser';
import { routes } from './pages/app.routes';
import { AppInit } from './services/app.init';
import { AppUpdate } from './services/app.update';
import { AndroidRulesShare } from './services/rules-share/android-rules-share';
import { RulesShare } from './services/rules-share/rules-share.interface';
import { WebRulesShare } from './services/rules-share/web-rules-share';
import { RulesExportReminder } from './services/rules.export-reminder';
import { GlobalState } from './state/global-state';

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
