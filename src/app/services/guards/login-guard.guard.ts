import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../service.index';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public userService: UsuarioService, public route: Router) { }

  canActivate() {
    if (this.userService.estaLogado()) {
      return true;
    } else {
      console.log('Bloqueado por el Guard');
      this.route.navigate(['/login']);
      return false;
    }
  }

}
