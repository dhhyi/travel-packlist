import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { PacklistComponent } from './packlist/packlist.component';

export const routes: Routes = [
    { path: '', redirectTo: '/packlist', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'packlist', component: PacklistComponent },
    { path: '**', redirectTo: '/packlist' }
];
