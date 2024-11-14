import { Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { PacklistComponent } from './packlist/packlist.component';
import { ConfigComponent } from './config/config.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EditRulesRawComponent as RulesRawComponent } from './rules-raw/rules-raw.component';
import { rulesValid } from './rules-valid.guard';
import { RulesErrorComponent } from './rules-error/rules-error.component';
import { rulesContainNoComments } from '../app/pages/rules-contain-no-comments.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  { path: 'packlist', component: PacklistComponent, canActivate: [rulesValid] },
  { path: 'config', component: ConfigComponent },
  {
    path: 'rules',
    component: RulesComponent,
    canActivate: [rulesValid, rulesContainNoComments],
  },
  { path: 'rules-raw', component: RulesRawComponent },
  { path: 'rules-error', component: RulesErrorComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: '**', redirectTo: '/packlist' },
];
