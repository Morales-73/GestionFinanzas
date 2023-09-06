import { Injectable } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso.models';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  private ingresos: Ingreso[] = [];

  constructor() { }

  // Agregar un nuevo ingreso
  agregarIngreso(ingreso: Ingreso) {
    ingreso.id = this.ingresos.length + 1;
    this.ingresos.push(ingreso);
  }

  // Obtener todos los ingresos
  obtenerIngresos() {
    return this.ingresos;
  }
}
