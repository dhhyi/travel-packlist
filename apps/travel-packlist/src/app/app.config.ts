import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  isDevMode,
  inject,
  provideAppInitializer,
  // eslint-disable-next-line no-restricted-imports
  Injector,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { PARSER_CONFIG_PROVIDER, ParserConfig } from '@travel-packlist/model';
import { provideRulesDocumentation } from '@travel-packlist/rules-documentation';
import { provideRulesTemplate } from '@travel-packlist/rules-template';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { routes } from './pages/app.routes';
import { AppInit } from './services/app.init';
import { AppUpdate } from './services/app.update';
import { AndroidRulesShare } from './services/rules-share/android-rules-share';
import { RulesShare } from './services/rules-share/rules-share.interface';
import { WebRulesShare } from './services/rules-share/web-rules-share';
import { RulesExportReminder } from './services/rules.export-reminder';

function initParserConfig(injector: Injector): ParserConfig {
  return {
    isTrackWeight: () => {
      return injector.get(GLOBAL_STATE).config.trackWeight();
    },
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
    {
      deps: [Injector],
      provide: PARSER_CONFIG_PROVIDER,
      useFactory: initParserConfig,
    },
    {
      provide: RulesShare,
      useClass: ANDROID ? AndroidRulesShare : WebRulesShare,
    },
    provideRulesDocumentation(),
    provideRulesTemplate(),
  ],
};
