import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, AfterViewInit {

  usuario: Usuario;

  constructor(public userService: UsuarioService) {
    this.usuario = this.userService.usuario;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.usuario = this.userService.usuario;
  }

}
