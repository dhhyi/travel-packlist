import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'rules', component: RulesComponent },
    { path: '**', redirectTo: '/about' }
];
