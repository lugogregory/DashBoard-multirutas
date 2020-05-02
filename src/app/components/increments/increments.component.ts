import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styles: []
})
export class IncrementsComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() actualizarValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef; // Referencia a un elemento particular Html, cuando tenemos varios hijos del mismo

  constructor() { }

  ngOnInit(): void {
  }

  onChanges(newValue: number) {
    // const elemHTML: any = document.getElementsByName('progreso')[0];
    if (newValue > 100) {
      this.progreso = 100;
    } else {
      if (newValue < 0) {
        this.progreso = 0;
      } else {
        this.progreso = newValue;
      }
    }
    this.txtProgress.nativeElement.value = this.progreso;
    // elemHTML.value = this.progreso;
    this.actualizarValor.emit(this.progreso);
  }

  cambiarValor(valor) {
    const valorActual = Number(this.progreso); // Parsear a Numero

    if (valorActual + valor <= 100 && valorActual + valor >= 0) {
      this.progreso = valorActual + valor;
      this.actualizarValor.emit(this.progreso);
      this.txtProgress.nativeElement.focus();
    }
  }
}
