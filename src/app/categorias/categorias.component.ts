import { Component } from '@angular/core';
import { Categoria } from '../models/categoria.models';
import { CategoriaService } from '../services/categoria/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categoria: Categoria = {
    nombre: '',
    detalle: '',
  };

  constructor(private categoriaService: CategoriaService) {}

  agregarCategoria() {
    // Agregar la nueva categoría utilizando this.categoriaService
    this.categoriaService.agregarCategoria(this.categoria);

    // Limpiar el formulario
    this.categoria = {
      nombre: '',
      detalle: ''
    };
  }
}
