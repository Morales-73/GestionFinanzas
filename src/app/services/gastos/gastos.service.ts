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
    gasto.id = this.gastos.length + 1;
    this.gastos.push(gasto);
  }

  // Obtener todos los gastos
  obtenerGastos() {
    return this.gastos;
  }
}
