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
    if (ingreso.nombre != "" && ingreso.detalle != "" && ingreso.monto != null && ingreso.categoria != "" && ingreso.fecha != null) {
      ingreso.id = this.ingresos.length + 1;
      this.ingresos.push(ingreso);
      localStorage.setItem("Ingresos",JSON.stringify(this.ingresos));
    }
  }

  // Obtener todos los ingresos
  obtenerIngresos() {
    try {
      const ingresosDesdeLocalStorage = localStorage.getItem("Ingresos");
      if (ingresosDesdeLocalStorage !== null) {
        this.ingresos = JSON.parse(ingresosDesdeLocalStorage);
      } else {
        // Manejo para el caso en que no hay datos en localStorage
      }
    } catch (error) {
      console.error("Error al analizar JSON desde localStorage:", error);
      // Manejo del error, como restaurar a un valor predeterminado o mostrar un mensaje al usuario.
    }
    return this.ingresos;
  }
}
