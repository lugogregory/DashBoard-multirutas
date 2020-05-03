import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Aqui importo todos los servicios que necesito proveer a través de mi modulo:
import { SharedService, SettingsService, SidebarService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SharedService, SettingsService, SidebarService]
})
export class ServiceModule { }
