import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulos
import { SharedModule } from '../shared/shared.module';
// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

// ng2-Chart
import { ChartsModule } from 'ng2-charts';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

// Temporal
import { IncrementsComponent } from '../components/increments/increments.component';
import { GraphDonutsComponent } from '../components/graph-donuts/graph-donuts.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementsComponent,
        GraphDonutsComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent
    ],
    exports: [ // Coloco los componentes que deseo exportar para ser usados en modulos externos al propio
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,         // Modulos externos que necesito dentro de mis componentes del modulo personalizado
        FormsModule,
        ChartsModule,
        BrowserModule,
        PipesModule,
        PAGES_ROUTES // Sistema de rutas hijas para la seccion de PAGES
    ]
})

export class PagesModule {}
