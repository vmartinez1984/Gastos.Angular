import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioDePeriodoComponent } from './components/Periodos/formulario-de-periodo/formulario-de-periodo.component';
import { ListaDePeriodosComponent } from './components/Periodos/lista-de-periodos/lista-de-periodos.component';
import { BorrarPeriodoComponent } from './components/Periodos/borrar-periodo/borrar-periodo.component';
import { DetallesDelPeriodoComponent } from './components/Periodos/detalles-del-periodo/detalles-del-periodo.component';
import { FormularioDeSubcategoriaComponent } from './components/Subcategorias/formulario-de-subcategoria/formulario-de-subcategoria.component';
import { ListaDeSubcategoriasComponent } from './components/Subcategorias/lista-de-subcategorias/lista-de-subcategorias.component';
import { BorrarSubcategoriaComponent } from './components/Subcategorias/borrar-subcategoria/borrar-subcategoria.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

//components
import { FormularioDeGastoComponent } from './components/Gastos/formulario-de-gasto/formulario-de-gasto.component';
import { ListaDeApartadosComponent } from './components/Apartados/lista-de-apartados/lista-de-apartados.component';
import { FormularioDeApartadoComponent } from './components/Apartados/formulario-de-apartado/formulario-de-apartado.component';
import { DetallesDeApartadoComponent } from './components/Apartados/detalles-de-apartado/detalles-de-apartado.component';
import { BorrarApartadoComponent } from './components/Apartados/borrar-apartado/borrar-apartado.component';
import { FormularioDeDetalleDeApartadoComponent } from './components/DetalleDeApartados/formulario-de-detalle-de-apartado/formulario-de-detalle-de-apartado.component';

//Angular
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSortModule } from '@angular/material/sort'
import { MatGridListModule } from '@angular/material/grid-list'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatChipsModule} from '@angular/material/chips'

@NgModule({
  declarations: [
    AppComponent,
    FormularioDePeriodoComponent,
    ListaDePeriodosComponent,
    BorrarPeriodoComponent,
    DetallesDelPeriodoComponent,
    FormularioDeSubcategoriaComponent,
    ListaDeSubcategoriasComponent,
    BorrarSubcategoriaComponent,
    FormularioDeGastoComponent,
    ListaDeApartadosComponent,
    FormularioDeApartadoComponent,
    DetallesDeApartadoComponent,
    BorrarApartadoComponent,
    FormularioDeDetalleDeApartadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Angular
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
