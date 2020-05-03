import { Component, OnInit } from '@angular/core';

declare function init_plugins(); // Plugin cargados desde el index.html, (src="assets/js/custom.js")

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins(); // Ejecuto el plugins que hace que las funciones del menú funcionen
  }

}
