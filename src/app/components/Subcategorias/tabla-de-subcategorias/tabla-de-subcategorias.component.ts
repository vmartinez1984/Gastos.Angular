import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component';
import { BorrarSubcategoriaComponent } from '../borrar-subcategoria/borrar-subcategoria.component';
import { AgregarCategoriaComponent } from '../agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-tabla-de-subcategorias',
  templateUrl: './tabla-de-subcategorias.component.html',
  styleUrls: ['./tabla-de-subcategorias.component.css']
})
export class TablaDeSubcategoriasComponent implements OnChanges {
  displayedColumns: string[] = ['nombre', 'cantidad', 'acciones'];
  dataSource = new MatTableDataSource<Subcategoria>()
  estaCargando = false
  @ViewChild(MatTable) table!: MatTable<Subcategoria>;
  @Input() subcategoriasInput: Subcategoria[] = []
  total: number = 0;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnChanges(): void {
    //console.log(this.subcategoriasInput)
    this.dataSource.data = this.subcategoriasInput
    this.obtenerTotal()
  }

  editarSubcategoria(subcategoria: Subcategoria) {
    this.dialog.open(EditarCategoriaComponent, {
      disableClose: true,
      width: "60%",
      data: subcategoria
    }).afterClosed().subscribe(resultado => {
      console.log(resultado)

    })
  }

  borrarSubcategoria(subcategoria: Subcategoria) {
    this.dialog.open(BorrarSubcategoriaComponent, {
      disableClose: true,
      width: "60%",
      data: subcategoria
    }).afterClosed().subscribe(resultado => {
    })
  }

  agregarSubcategoria() {
    this.dialog.open(AgregarCategoriaComponent, {
      disableClose: true,
      width: "60%",
      data: 3
    }).afterClosed().subscribe((resultado: Subcategoria) => {
      //this.obtenerTodos()
      //console.log(resultado)     
      this.dataSource.data.push(resultado)
      this.table.renderRows()
    })
  }

  obtenerTotal(){    
    this.subcategoriasInput.forEach(item=>{
      this.total += item.cantidad
    })   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.total=0
    this.dataSource.filteredData.forEach(item=>{
      this.total += item.cantidad
    })   
  }
}
