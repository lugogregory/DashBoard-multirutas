import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public subscription: Subscription; // Esta variable me permite tener una referencia de la suscripción de mi observable

  constructor() {

    // La subscripción tiene TRES métodos para capturar la información que emite el observable.
    // retry permite volver a ejecutar el observable N veces. En el ejemplo 2 veces.
   this.subscription = this.regresaObservable().pipe(retry(2))
      .subscribe(
        numero => console.log('Subs' + numero),
        error => console.error('Hubo un error ' + error),
        () => console.log('El observable ha concluido')
      );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable<any>(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const resp = {
          valor: contador
        };

        observer.next(resp); // emite un mensaje que es capturado cuando realizamos la suscripcion
        if (contador === 3) {
          // clearInterval(intervalo);
          // observer.complete(); // Emite la finalización del observable, diciendole que ya no hay más datos que mostrar.
        }
        if (contador === 2) {
          // observer.error('Mi mensaje de error'); // Emite un mensaje de error al observable.
        }
      }, 1000);
    }).pipe(
      map(resp => resp.valor), // Con el operador "map", estoy filtrando el objeto que me viene del observable y sólo devuelvo el "valor"
      filter((valor, index) => { // Con el filter controlo si el valor se devuelve o NO, en este caso, sólo devuelvo los IMPARES.
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );


  }

}
