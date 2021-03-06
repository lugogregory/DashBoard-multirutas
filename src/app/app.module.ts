import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';

// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule, // Modulo personalizado para la seccion de "pages"
    FormsModule,
    ServiceModule,
    ReactiveFormsModule, // Modulo para formularios reactivos
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
