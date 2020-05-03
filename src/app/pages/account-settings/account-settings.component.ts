import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private _document, private _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.obtenerTema();
  }

  cambiarColor(tema: string, link: any) {
    this.asignarCheck(link);
    this._ajustes.aplicarTema(tema); // aplica el tema al index.html y guarda en localStorage
  }

  obtenerTema() {
    const selector: any = document.getElementsByClassName(this._ajustes.ajustes.tema + '-theme');
    if (selector.length > 0) {
      selector[0].classList.add('working');
    }
  }

  asignarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector'); // selecciono todos los elementos que tengan la clase 'selector'

    for (const item of selectores) {
      item.classList.remove('working'); // remueve la clase 'working' de todos los elementos del array generado.
    }

    link.classList.add('working'); // agrego la clase 'workin' al elemento seleccionado.
  }

}
