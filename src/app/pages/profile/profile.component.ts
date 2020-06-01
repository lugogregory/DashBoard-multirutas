import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/user.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenTemp;

  fileToUpload: File; // se cargará cuando se detecte cambio en el input type = "file"

  constructor(public userService: UsuarioService) {
    this.usuario = userService.usuario;
  }

  ngOnInit(): void {
  }

  seleccionImagen(file: File) {
    if ( !file ) {
      this.fileToUpload = null; // Si el usuario no selecciona ninguna imagen reseteo la variable y retorno
      return;
    }

    if ( file.type.indexOf('image') < 0 ) { // NO es una imagen
      this.fileToUpload = null;
      Swal.fire({ title: 'Error', text: 'Debe seleccionar una imagen', icon: 'error' });
      return;
    }

    this.fileToUpload = file; // seteo mi variable con el valor del archivo a subir

    // Aplicamos Vanilla Java Script para asignar la imagen seleccionada a la imagen temporal
    const reader = new FileReader();
    const urlImgTemp = reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imagenTemp = reader.result ;
    };
  }

  cambiarImagen() { // Función ejecutada por el button de confirmación de cambio de imagen
    this.userService.cambiarImagenUsuario(this.fileToUpload, this.usuario._id); // lamo al servicio que me ejecuta el cambio de imagen
  }

  guardar(userForm: Usuario) {
    this.usuario.nombre = userForm.nombre;
    if ( !this.usuario.google ) {
      this.usuario.email = userForm.email;
    }
    this.userService.actualizarUsuario(this.usuario).subscribe();
  }

}
