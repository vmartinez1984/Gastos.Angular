import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-de-subcategorias',
  templateUrl: './lista-de-subcategorias.component.html',
  styleUrls: ['./lista-de-subcategorias.component.css']
})
export class ListaDeSubcategoriasComponent {
  displayedColumns: string[] = ['nombre', 'cantidad', 'acciones'];
  entradas: Subcategoria[] = []
  apartados: Subcategoria[] = []
  gastos: Subcategoria[] = []
  estaCargando = false
  @ViewChild(MatTable) table!: MatTable<Subcategoria>;

  constructor(
    private service: RepositorioService,    
    private snackbar: MatSnackBar
  ) {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.estaCargando = true
    this.service.subcategoria.obtenerTodos().subscribe({
      next: (subcategorias) => {
        this.entradas = this.obtenerSubcategoriaPorCategoriaId(subcategorias, 1)
        this.gastos = this.obtenerSubcategoriaPorCategoriaId(subcategorias, 2)
        this.apartados = this.obtenerSubcategoriaPorCategoriaId(subcategorias, 3)
        this.estaCargando = false
      }, error: (error) => {
        this.snackbar.open("Valio pepino", ":(")
      }
    })
  }
  obtenerSubcategoriaPorCategoriaId(subcategorias: Subcategoria[], categoriaId: number): Subcategoria[] {
    var lista: Subcategoria[] = []
    subcategorias.forEach(subcategoria => {
      if (subcategoria.categoria.id == categoriaId)
        lista.push(subcategoria)
    })

    return lista
  }

}