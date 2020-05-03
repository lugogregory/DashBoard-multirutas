import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins(); // Plugin cargados desde el index.html, (src="assets/js/custom.js")

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
    init_plugins(); // Ejecuto el plugins que hace que las funciones del menú funcionen
  }

  accederPaginas() {
    this.route.navigate(['/dashboard']);
  }

}
