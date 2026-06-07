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
    loadComponent: () => import('./packlist/packlist').then((m) => m.Packlist),
    canActivate: [rulesValid],
    data: { config: true },
  },
  {
    path: 'config',
    loadComponent: () => import('./config/config').then((m) => m.Config),
  },
  {
    path: 'session',
    loadComponent: () => import('./session/session').then((m) => m.Session),
    data: { historyBack: true },
  },
  {
    path: 'rules',
    loadComponent: () =>
      import('./rules-editor/rules-editor').then((m) => m.RulesEditor),
    canActivate: [rulesValid, rulesContainNoComments],
    data: { config: true },
  },
  {
    path: 'rules-raw',
    loadComponent: () =>
      import('./edit-rules-raw/edit-rules-raw').then((m) => m.EditRulesRaw),
    data: { config: true, ruleHelp: true },
  },
  {
    path: 'rules-error',
    loadComponent: () =>
      import('./rules-error/rules-error').then((m) => m.RulesError),
    data: { config: true },
  },
  {
    path: 'documentation/:topic',
    loadComponent: () =>
      import('./documentation/documentation').then((m) => m.Documentation),
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
