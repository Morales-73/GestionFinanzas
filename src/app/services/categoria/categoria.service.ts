import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categorias: Categoria[] = [];

  getCategorias(): Categoria[] {
    try {
      const categoriasDesdeLocalStorage = localStorage.getItem("Categorias");
      if (categoriasDesdeLocalStorage !== null) {
        this.categorias = JSON.parse(categoriasDesdeLocalStorage);
      } else {
        // Manejo para el caso en que no hay datos en localStorage
      }
    } catch (error) {
      console.error("Error al analizar JSON desde localStorage:", error);
      // Manejo del error, como restaurar a un valor predeterminado o mostrar un mensaje al usuario.
    }
    return this.categorias;
  }

  agregarCategoria(categoria: Categoria) {
    if (categoria.nombre != "" && categoria.detalle != "") {
      this.categorias.push(categoria);
      localStorage.setItem("Categorias",JSON.stringify(this.categorias))
    }
  }
}
