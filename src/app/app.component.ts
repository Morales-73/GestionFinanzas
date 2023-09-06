import { Component } from '@angular/core';
import { NavegacionService } from './services/navegacion/navegacion.service'; // Ajusta la ruta según la ubicación real del servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public navegacionService: NavegacionService) {}
  title = 'gestion-finanzas';
}
