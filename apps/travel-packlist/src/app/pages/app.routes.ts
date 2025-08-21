import {
  provideRouter,
  Route,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';

import { rulesContainNoComments } from './rules-contain-no-comments.guard';
import { rulesValid } from './rules-valid.guard';

export interface RouteData {
  hierarchy: number;
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
    data: { hierarchy: 0, config: true },
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./config/config.component').then((m) => m.ConfigComponent),
    data: { hierarchy: 1 },
  },
  {
    path: 'session',
    loadComponent: () =>
      import('./session/session.component').then((m) => m.SessionComponent),
    data: { hierarchy: 2, historyBack: true },
  },
  {
    path: 'rules',
    loadComponent: () =>
      import('./rules/rules.component').then((m) => m.RulesComponent),
    canActivate: [rulesValid, rulesContainNoComments],
    data: { hierarchy: 2, config: true },
  },
  {
    path: 'rules-raw',
    loadComponent: () =>
      import('./rules-raw/rules-raw.component').then(
        (m) => m.EditRulesRawComponent,
      ),
    data: { hierarchy: 2, config: true, ruleHelp: true },
  },
  {
    path: 'rules-error',
    loadComponent: () =>
      import('./rules-error/rules-error.component').then(
        (m) => m.RulesErrorComponent,
      ),
    data: { hierarchy: 2, config: true },
  },
  {
    path: 'documentation/:topic',
    loadComponent: () =>
      import('./documentation/documentation.component').then(
        (m) => m.DocumentationComponent,
      ),
    data: { hierarchy: 3, historyBack: true },
  },
  { path: '**', redirectTo: '/packlist' },
];

export const provideRouting = () =>
  provideRouter(routes, withHashLocation(), withComponentInputBinding());
