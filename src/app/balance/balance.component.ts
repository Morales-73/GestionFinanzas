import { Component } from '@angular/core';
import { Gasto } from '../models/gasto.models';
import { Ingreso } from '../models/ingreso.models';
import { GastosService } from '../services/gastos/gastos.service';
import { IngresosService } from '../services/ingresos/ingresos.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  gastos: Gasto[] = [];
  ingresos:Ingreso[] = [];

  ingresoTotal: number = 0; // Variable para almacenar el ingreso total
  gastoTotal: number = 0;   // Variable para almacenar el gasto total
  balanceTotal: number = 0; // Variable para almacenar el balance total

  constructor(private ingresosService: IngresosService,private gastoService: GastosService) {}

  ngOnInit() {
    this.gastos = this.gastoService.obtenerGastos();
    this.ingresos = this.ingresosService.obtenerIngresos();
    this.calcularTotales();
  }

  calcularTotales() {
    // Calcular el ingreso total sumando todos los ingresos
    // this.ingresoTotal = this.gastos.map( gasto => gasto.precio);
    console.log(this.gastos)

    // Calcular el gasto total sumando todos los gastos
    // this.gastoTotal = this.ingresos;
    console.log(this.ingresos)

    // Calcular el balance total
    // this.balanceTotal = this.ingresoTotal + this.gastoTotal;
  }
}
