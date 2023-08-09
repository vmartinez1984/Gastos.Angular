import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeSubcategoriasComponent } from './components/Subcategorias/lista-de-subcategorias/lista-de-subcategorias.component';
import { ListaDePeriodosComponent } from './components/Periodos/lista-de-periodos/lista-de-periodos.component';
import { DetallesDelPeriodoComponent } from './components/Periodos/detalles-del-periodo/detalles-del-periodo.component';
import { ListaDeApartadosComponent } from './components/Apartados/lista-de-apartados/lista-de-apartados.component';

const routes: Routes = [
  { path: "subcategorias", component: ListaDeSubcategoriasComponent },
  { path: "periodos", component: ListaDePeriodosComponent},
  { path: "periodos/detalles/:id", component:DetallesDelPeriodoComponent},
  { path: "apartados", component: ListaDeApartadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
