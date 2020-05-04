import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public titulo: string;

  constructor(private router: Router) {
    this.getDataRoute()
      .subscribe((evento) => {
        this.titulo = evento.titulo;
      });
  }

  ngOnInit(): void {
  }

  getDataRoute(): Observable<any> {
    // Capturo los eventos de mi router para detectar la página en la que me encuentro. Filtro los eventos y devuelvo sólo el objeto.
    return this.router.events.pipe(
      filter((evento) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.url.length > 0),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
