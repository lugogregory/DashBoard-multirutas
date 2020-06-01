import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// Guards
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        canActivate: [LoginGuardGuard],
        component: PagesComponent,
        children: [// Definicion de las rutas hijas.         // Agrego data para capturar la info de la página actual en la MIGA
            { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
            { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas'} },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
            { path: 'profile', component: ProfileComponent, data: {titulo: 'Mi perfil'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs/Observables'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de tema'}},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
