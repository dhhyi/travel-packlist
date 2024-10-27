import { Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { PacklistComponent } from './packlist/packlist.component';
import { ConfigComponent } from './config/config.component';
import { DocumentationComponent } from './rules/documentation/documentation.component';
import { EditRulesRawComponent } from './rules/edit-rules-raw/edit-rules-raw.component';
import { rulesValid } from './rules-valid.guard';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  { path: 'packlist', component: PacklistComponent, canActivate: [rulesValid] },
  { path: 'config', component: ConfigComponent },
  { path: 'rules', component: RulesComponent, canActivate: [rulesValid] },
  { path: 'rules-raw', component: EditRulesRawComponent },
  { path: 'rules-error', component: ErrorComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: '**', redirectTo: '/packlist' },
];
