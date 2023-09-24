import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { BalanceComponent } from './balance/balance.component';

const routes: Routes = [
  { path: '', component: GastosComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'balance', component: BalanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
