import {
  provideRouter,
  Route,
  withComponentInputBinding,
  withHashLocation,
  withViewTransitions,
} from '@angular/router';

import { rulesContainNoComments } from './rules-contain-no-comments.guard';
import { rulesValid } from './rules-valid.guard';

export interface RouteData {
  ruleHelp?: boolean;
  config?: boolean;
  historyBack?: boolean;
}

const routes: (Route & { data?: RouteData })[] = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  {
    path: 'packlist',
    loadComponent: () =>
      import('./packlist/packlist.component').then((m) => m.PacklistComponent),
    canActivate: [rulesValid],
    data: { config: true },
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./config/config.component').then((m) => m.ConfigComponent),
  },
  {
    path: 'session',
    loadComponent: () =>
      import('./session/session.component').then((m) => m.SessionComponent),
    data: { historyBack: true },
  },
  {
    path: 'rules',
    loadComponent: () =>
      import('./rules/rules.component').then((m) => m.RulesComponent),
    canActivate: [rulesValid, rulesContainNoComments],
    data: { config: true },
  },
  {
    path: 'rules-raw',
    loadComponent: () =>
      import('./rules-raw/rules-raw.component').then(
        (m) => m.EditRulesRawComponent,
      ),
    data: { config: true, ruleHelp: true },
  },
  {
    path: 'rules-error',
    loadComponent: () =>
      import('./rules-error/rules-error.component').then(
        (m) => m.RulesErrorComponent,
      ),
    data: { config: true },
  },
  {
    path: 'documentation/:topic',
    loadComponent: () =>
      import('./documentation/documentation.component').then(
        (m) => m.DocumentationComponent,
      ),
    data: { historyBack: true },
  },
  { path: '**', redirectTo: '/packlist' },
];

export const provideRouting = () =>
  provideRouter(
    routes,
    withHashLocation(),
    withComponentInputBinding(),
    withViewTransitions({ skipInitialTransition: true }),
  );
