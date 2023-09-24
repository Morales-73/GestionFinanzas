import { Injectable } from '@angular/core';
import { Gasto } from 'src/app/models/gasto.models';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private gastos: Gasto[] = [];

  constructor() { }

  // Agregar un nuevo gasto
  agregarGasto(gasto: Gasto) {
    if (gasto.nombre != "" && gasto.detalle != "" && gasto.categoria != "" && gasto.precio != null && gasto.fecha != null) {
      gasto.id = this.gastos.length + 1;
      this.gastos.push(gasto);
      localStorage.setItem("Gastos",JSON.stringify(this.gastos));
    }
  }

  // Obtener todos los gastos
  obtenerGastos() {
    try {
      const gastosDesdeLocalStorage = localStorage.getItem("Gastos");
      if (gastosDesdeLocalStorage !== null) {
        this.gastos = JSON.parse(gastosDesdeLocalStorage);
      } else {
        // Manejo para el caso en que no hay datos en localStorage
      }
    } catch (error) {
      console.error("Error al analizar JSON desde localStorage:", error);
      // Manejo del error, como restaurar a un valor predeterminado o mostrar un mensaje al usuario.
    }
    return this.gastos;
  }
}
