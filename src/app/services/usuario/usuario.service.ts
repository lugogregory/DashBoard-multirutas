import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';


import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UploadFileService } from '../upload-file/upload-file.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  usuario: Usuario;

  constructor(
    public http: HttpClient,
    public router: Router,
    public uploadService: UploadFileService
  ) {
    this.obtenerDatosStorage();
  }

  cambiarImagenUsuario(file: File, id: string) {
    this.uploadService.uploadFile(file, 'usuarios', id)
    .then((resp: any) => {
      this.usuario.img = resp.data.img;
      Swal.fire({ title: 'Imagen actualizada', text: resp.data.nombre, icon: 'success' });
      this.guardarSessionStorage(id, this.token, this.usuario);
    })
    .catch((resp: any) => {
      Swal.fire({ title: 'Error', text: 'Error al actualizar imagen de usuario', icon: 'error' });
    });
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICES + '/usuario';

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        Swal.fire({ title: 'Usuario creado', text: usuario.email, icon: 'success' });
        return resp.usuario;
      })
    );
  }

  actualizarUsuario(usuario: Usuario) {
    const url = `${URL_SERVICES}/usuario/${this.usuario._id}?token=${this.token}`;

    return this.http.put(url, usuario).pipe(
      map((resp: any) => {

        this.guardarSessionStorage(this.usuario._id, this.token, resp.usuario);
        Swal.fire({ title: 'Usuario actualizado', text: usuario.email, icon: 'success' });
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        return resp.usuario;
      })
    );
  }

  estaLogado() {
    return this.token.length > 5;
  }

  obtenerDatosStorage() {
    this.token = sessionStorage.getItem('token') || '';
    this.usuario = JSON.parse(sessionStorage.getItem('usuario')) || null;
  }

  guardarSessionStorage(id: string, token: string, usuario: Usuario) {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    this.token = token;
    this.usuario = usuario;
  }

  loginGoogle(token: string) {
    const url = URL_SERVICES + '/login/google';

    return this.http.post(url, { token }).pipe(
      map((resp: any) => {
        this.guardarSessionStorage(resp.id, resp.token, resp.usuario);
      })
    );
  }

  logout() {
    this.token = '';
    this.usuario = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recuerdame: boolean = false) {
    const url = URL_SERVICES + '/login';

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        // Guardamos en el sessionStorage los datos del usuario
        this.guardarSessionStorage(resp.id, resp.token, resp.usuario);

        return true; // respondo a la llamada con un true cuando el login es correcto.
      })
    );

  }

}
