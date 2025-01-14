import { Routes } from '@angular/router';

import { rulesContainNoComments } from './rules-contain-no-comments.guard';
import { rulesValid } from './rules-valid.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  {
    path: 'packlist',
    loadComponent: () => import('./packlist/packlist.component'),
    canActivate: [rulesValid],
    data: { hierarchy: 0 },
  },
  {
    path: 'config',
    loadComponent: () => import('./config/config.component'),
    data: { hierarchy: 1 },
  },
  {
    path: 'rules',
    loadComponent: () => import('./rules/rules.component'),
    canActivate: [rulesValid, rulesContainNoComments],
    data: { hierarchy: 2 },
  },
  {
    path: 'rules-raw',
    loadComponent: () => import('./rules-raw/rules-raw.component'),
    data: { hierarchy: 2 },
  },
  {
    path: 'rules-error',
    loadComponent: () => import('./rules-error/rules-error.component'),
    data: { hierarchy: 2 },
  },
  {
    path: 'documentation',
    loadComponent: () => import('./documentation/documentation.component'),
    data: { hierarchy: 2 },
  },
  { path: '**', redirectTo: '/packlist' },
];
