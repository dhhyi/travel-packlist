import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { PacklistComponent } from './packlist/packlist.component';
import { ConfigComponent } from './config/config.component';

export const routes: Routes = [
  { path: '', redirectTo: '/packlist', pathMatch: 'full' },
  { path: 'packlist', component: PacklistComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/packlist' },
];
