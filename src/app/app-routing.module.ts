import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeSubcategoriasComponent } from './components/Subcategorias/lista-de-subcategorias/lista-de-subcategorias.component';
import { ListaDePeriodosComponent } from './components/Periodos/lista-de-periodos/lista-de-periodos.component';
import { DetallesDelPeriodoComponent } from './components/Periodos/detalles-del-periodo/detalles-del-periodo.component';
import { ListaDeApartadosComponent } from './components/Apartados/lista-de-apartados/lista-de-apartados.component';
import { DetallesDeApartadoComponent } from './components/Apartados/detalles-de-apartado/detalles-de-apartado.component';
import { ListaDeVersionesComponent } from './components/Presupuesto/lista-de-versiones/lista-de-versiones.component';

const routes: Routes = [
  { path: "subcategorias", component: ListaDeSubcategoriasComponent },
  { path: "periodos", component: ListaDePeriodosComponent },
  { path: "periodos/detalles/:id", component: DetallesDelPeriodoComponent },
  { path: "apartados", component: ListaDeApartadosComponent },
  { path: "apartados/detalles/:id", component: DetallesDeApartadoComponent },
  { path: "presupuestos", component: ListaDeVersionesComponent },

  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
