import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  seccionActual: string = 'gastos'; // Inicia en la sección de gastos por defecto

  cambiarSeccion(seccion: string) {
    this.seccionActual = seccion;
  }
}
