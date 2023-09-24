import { Component } from '@angular/core';
import { Gasto } from '../models/gasto.models';
import { CategoriaService } from '../services/categoria/categoria.service'; // Importa el servicio de categorías
import { GastosService } from '../services/gastos/gastos.service'; // Importa el servicio de categorías

import { Categoria } from '../models/categoria.models';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  gastos: Gasto[] = []; // Variable para almacenar la lista de gastos
  gasto: any = {}; // Lista de objeto para almacenar el gasto
  categorias: Categoria[]; // Variable para almacenar las categorías
  categoriaSeleccionada: string = '';

  constructor(private categoriaService: CategoriaService, private gastosService: GastosService) {
    this.categorias = categoriaService.getCategorias(); // Obtiene las categorías del servicio
  }

  ngOnInit() {
    // Obtiene la lista de gastos cuando se carga el componente
    this.gastos = this.gastosService.obtenerGastos();
  }

  agregarGasto() {
    this.gastosService.agregarGasto(this.gasto);

    // Limpiar el formulario
    this.gasto = {
      id: null,
      nombre: '',
      detalle: '',
      precio: null,
      categoria: '',
      fecha: new Date()
    }
    
  }

  // Función para aplicar el filtro por categoría
  aplicarFiltro() {
    if (this.categoriaSeleccionada === '') {
      // Si no se selecciona ninguna categoría, mostrar todos los gastos
      return this.gastos = this.gastosService.obtenerGastos();
    } else {
      // Filtrar gastos por la categoría seleccionada
      return this.gastos = this.gastosService.obtenerGastos().filter(
        (gasto) => gasto.categoria === this.categoriaSeleccionada
      );
    }
  }
}
