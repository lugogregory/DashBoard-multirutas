import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/user.model';

declare function init_plugins(); // Plugin cargados desde el index.html, (src="assets/js/custom.js")

declare const gapi: any; // Proviene del script de GoogleSingIn

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth2: any;

  constructor(public route: Router, public userService: UsuarioService) { }

  ngOnInit(): void {
    init_plugins(); // Ejecuto el plugins que hace que las funciones del menú funcionen
    this.googleInit();
  }

  accederPaginas(f: NgForm) {

    if (f.invalid) {
      return; // Si el formulario es inválido returno y no hago nada.
    }

    const usuario = new Usuario(null, f.value.email, f.value.password);

    this.userService.login(usuario, f.value.recuerdame)
      .subscribe((correcto) => this.route.navigate(['/dashboard'])); // Si recibe respuesta navego hacia el dashboard. 
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '490678624001-iretcttrk39lviafp40kkq0g6271gjsf.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;

      this.userService.loginGoogle(token)
        .subscribe(() => this.route.navigate(['/dashboard']));
    });
  }





}
