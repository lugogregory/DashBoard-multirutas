import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/user.model';





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  // Al hacer PUBLIC el servicio, puedo accesarlo desde el HTML
  constructor(public sideBar: SidebarService, public userService: UsuarioService) {
    this.usuario = userService.usuario;
  }

  ngOnInit(): void {
  }

}
