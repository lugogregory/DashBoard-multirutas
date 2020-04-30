import { NgModule } from '@angular/core';
// Modulos
import { SharedModule } from '../shared/shared.module';
// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    exports: [ // Coloco los componentes que deseo exportar para ser usados en modulos externos al propio
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,         // Modulos externos que necesito dentro de mis componentes del modulo personalizado
        PAGES_ROUTES // Sistema de rutas hijas para la seccion de PAGES
    ]
})

export class PagesModule {}
