import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuarios'): string {
    let url = URL_SERVICES + '/img'; // Ruta del servicio para obtener la imagen del user logeado

    if (!img) {
      return url + '/usuarios/xxx'; // Al ejecutar esto me traerá una imagen por defecto 'No image'
    }

    if (img.indexOf('https') >= 0) { // Si es una imagen de un usuario Google
      return img;
    }

    switch (tipo) {
      case 'usuarios':
        url = url + '/usuarios/' + img;
        break;
      case 'medicos':
        url = url + '/medicos/' + img;
        break;
      case 'hospitales':
        url = url + '/hospitales/' + img;
        break;
      default:
        console.log('No existe imagen del tipo indicado (medicos, usuarios, hospitales');
        url = url + '/usuario/xxx';
        break;
    }

    return url;
  }
}
