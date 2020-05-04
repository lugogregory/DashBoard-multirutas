import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres()
      .then((mensaje) => console.log('Respuesta ' + mensaje))
      .catch((error) => console.error('Ha ocurrido un error ' + error));
  }

  ngOnInit(): void {
  }

  // Mi función asyncrona que devuelve un booleano cuando resuelve la promesa
  contarTres(): Promise<boolean> { // Defino el tipo de dato que devuelve la función, una promesa de tipo booleano
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          // resolve(); // Puedo ejecutar el resolve sin parametros
          // reject(); // Puedo ejecutar el reject sin parametros o mensajes
          // reject('algun error');
          clearInterval(intervalo); // Función que detiene el interval y limpia memoria. 
        }
      }, 1000);
    });
  }

}
