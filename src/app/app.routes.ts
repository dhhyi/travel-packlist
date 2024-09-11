import { Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { PacklistComponent } from './packlist/packlist.component';
import { ConfigComponent } from './config/config.component';
import { DocumentationComponent } from './rules/documentation/documentation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  { path: 'packlist', component: PacklistComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: '**', redirectTo: '/packlist' },
];
