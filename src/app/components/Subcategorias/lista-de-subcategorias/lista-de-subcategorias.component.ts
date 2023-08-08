import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { FormularioDeSubcategoriaComponent } from '../formulario-de-subcategoria/formulario-de-subcategoria.component';
import { BorrarSubcategoriaComponent } from '../borrar-subcategoria/borrar-subcategoria.component';

@Component({
  selector: 'app-lista-de-subcategorias',
  templateUrl: './lista-de-subcategorias.component.html',
  styleUrls: ['./lista-de-subcategorias.component.css']
})
export class ListaDeSubcategoriasComponent {
  displayedColumns: string[] = ['nombre', 'cantidad', 'acciones'];
  dataSource = new MatTableDataSource<Subcategoria>()
  apartados = new MatTableDataSource<Subcategoria>()
  gastos = new MatTableDataSource<Subcategoria>()

  constructor(
    private service : RepositorioService,
    private dialog: MatDialog
  ){
    this.obtenerTodos();
  }

  obtenerTodos(){
    this.service.subcategoria.obtenerPorCategoriaId(1).subscribe({
      next:(data)=>{
        this.dataSource.data =data
      }
    })

    this.service.subcategoria.obtenerPorCategoriaId(3).subscribe({
      next:(data)=>{
        this.apartados.data =data
      }
    })

    this.service.subcategoria.obtenerPorCategoriaId(2).subscribe({
      next:(data)=>{
        this.gastos.data =data
      }
    })
  }

  editarSubcategoria(subcategoria: Subcategoria){
    this.dialog.open(FormularioDeSubcategoriaComponent,{
      disableClose:true,
      width:"60%",
      data:subcategoria
    }).afterClosed().subscribe(resultado=>{
      this.obtenerTodos()
    })
  }

  borrarSubcategoria(subcategoria: Subcategoria){
    this.dialog.open(BorrarSubcategoriaComponent,{
      disableClose:true,
      width:"60%",
      data:subcategoria
    }).afterClosed().subscribe(resultado=>{
      this.obtenerTodos()
    })
  }

  agregarSubcategoria(){
    this.dialog.open(FormularioDeSubcategoriaComponent,{
      disableClose:true,
      width:"60%"      
    }).afterClosed().subscribe(resultado=>{
      this.obtenerTodos()
    })
  }

}
