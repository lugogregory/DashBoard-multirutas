import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  uploadFile(file: File, tipo: string, id: string) { // tipo --> usuario, medico, hospital     id --> id del modelo
    // La subida del archivo se realizará con AJAX y JS

    return new Promise((resolve, reject) => {
      const formData = new FormData();

      const xhr = new XMLHttpRequest();

      formData.append('imagen', file, file.name); // 'imagen' es el nombre del parametro que recibo el BACKEND

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) { // Cuando termina el proceso de subida
          if (xhr.status === 200) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Falló subida de la imagen');
            reject(xhr.response);
          }
        } else {
          console.log('Cargando imagen');
        }
      };

      const url = `${URL_SERVICES}/upload/${tipo}/${id}`; // construyo el request.
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });
  }

}
