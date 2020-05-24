import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../models/user.model';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';

declare function init_plugins(); // Plugin cargados desde el index.html, (src="assets/js/custom.js")

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup; // Creando un formulario con reactiveForms
  constructor(public _usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    init_plugins(); // Ejecuto el plugins que hace que las funciones del menú funcionen

    // Creo el formulario
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required), // El primer parámetro es el valor por defecto y el segundo las validaciones
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') }); // Creo una función para añadir validaciones adicionales


    // Para asignar un valor por defecto al formulario
    this.forma.setValue({
      nombre: 'Gregory',
      email: 'greg@greg.com',
      password: '123456',
      password2: '123456',
      condiciones: false
    });

  }

  sonIguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) { // Cuando el formulario es válido returno NULL
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return; // Si es inválido no hago nada
    }

    if (!this.forma.value.condiciones) {
      Swal.fire({
        icon: 'warning',
        title: 'Importante',
        text: 'Debe aceptar las condiciones'
      });

      return;
    }

    const usuario: Usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    // Si tengo una respuesta positiva navegará al login
    this._usuarioService.crearUsuario(usuario).subscribe((resp) => this.router.navigate(['./login']));

    console.log('Forma valida:' + this.forma.valid);
  }

}
