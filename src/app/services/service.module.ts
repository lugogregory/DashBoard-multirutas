import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Aqui importo todos los servicios que necesito proveer a través de mi modulo:
import { SharedService, SettingsService, SidebarService, UsuarioService, LoginGuardGuard } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SharedService, SettingsService, SidebarService, UsuarioService, LoginGuardGuard]
})
export class ServiceModule { }
