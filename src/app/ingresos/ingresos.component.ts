import { Component } from '@angular/core';
import { Categoria } from '../models/categoria.models';
import { CategoriaService } from '../services/categoria/categoria.service';
import { IngresosService } from '../services/ingresos/ingresos.service';
import { Ingreso } from '../models/ingreso.models';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingresos: Ingreso[] = []; // Variable para almacenar la lista de ingresos
  ingreso: any = {}; // Lista de objeto para almacenar el gasto
  categorias: Categoria[];
  categoriaSeleccionada: string = '';

  constructor(private categoriaService: CategoriaService,private ingresosService: IngresosService) {
    this.categorias = categoriaService.getCategorias(); // Obtiene las categorías del servicio
  }

  ngOnInit() {
    // Obtiene la lista de gastos cuando se carga el componente
    this.ingresos = this.ingresosService.obtenerIngresos();
  }

  agregarIngreso() {
    this.ingresosService.agregarIngreso(this.ingreso)

    // Limpiar el formulario
    this.ingreso = {
      id: 0,
      nombre: '',
      detalle: '',
      monto: 0,
      categoria: '',
      fecha: new Date()
    };
  }

  // Función para aplicar el filtro por categoría
  aplicarFiltro() {
    if (this.categoriaSeleccionada === '') {
      // Si no se selecciona ninguna categoría, mostrar todos los gastos
      return this.ingresos = this.ingresosService.obtenerIngresos();
    } else {
      // Filtrar gastos por la categoría seleccionada
      return this.ingresos = this.ingresosService.obtenerIngresos().filter(
        (gasto) => gasto.categoria === this.categoriaSeleccionada
      );
    }
  }
}
