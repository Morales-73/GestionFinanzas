import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categorias: Categoria[] = [];

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  agregarCategoria(categoria: Categoria) {
    this.categorias.push(categoria);
  }
}
