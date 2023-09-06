import { Component } from '@angular/core';
import { NavegacionService } from '../services/navegacion/navegacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private navegacionService : NavegacionService ) {}

  cambiarSeccion(seccion:string){
    this.navegacionService.cambiarSeccion(seccion);
  }
}
