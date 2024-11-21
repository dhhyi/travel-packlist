import { Routes } from '@angular/router';
import { rulesValid } from './rules-valid.guard';
import { rulesContainNoComments } from './rules-contain-no-comments.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  {
    path: 'packlist',
    loadComponent: () => import('./packlist/packlist.component'),
    canActivate: [rulesValid],
  },
  { path: 'config', loadComponent: () => import('./config/config.component') },
  {
    path: 'rules',
    loadComponent: () => import('./rules/rules.component'),
    canActivate: [rulesValid, rulesContainNoComments],
  },
  {
    path: 'rules-raw',
    loadComponent: () => import('./rules-raw/rules-raw.component'),
  },
  {
    path: 'rules-error',
    loadComponent: () => import('./rules-error/rules-error.component'),
  },
  {
    path: 'documentation',
    loadComponent: () => import('./documentation/documentation.component'),
  },
  { path: '**', redirectTo: '/packlist' },
];
