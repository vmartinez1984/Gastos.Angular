import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApartadoDto } from 'src/app/interfaces/apartado';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDeApartadoComponent } from '../formulario-de-apartado/formulario-de-apartado.component';

@Component({
  selector: 'app-lista-de-apartados',
  templateUrl: './lista-de-apartados.component.html',
  styleUrls: ['./lista-de-apartados.component.css']
})
export class ListaDeApartadosComponent implements AfterViewInit {
  displayedColumns: string[] = ['subcategoriaNombre', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource<ApartadoDto>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private servicio: RepositorioService,
    private dialog: MatDialog
  ) {
    this.obtenerTodos()
  }

  ngAfterViewInit() {    
    this.dataSource.sort = this.sort;
  }


  obtenerTodos() {
    this.servicio.apartado.obtenerTodos().subscribe({
      next: (data) => {
        console.log(data)
        data.forEach(item => {
          item.subcategoriaNombre = item.subcategoria.nombre
          item.tipoDeApartadoNombre = item.tipoDeApartado.nombre
        })
        this.dataSource.data = data
      }
    })
  }

  editar(_t68: any) {
    throw new Error('Method not implemented.');
  }
  borrar(_t68: any) {
    throw new Error('Method not implemented.');
  }
  agregar() {
    this.dialog.open(FormularioDeApartadoComponent, {
      disableClose: true,
      width: "70%"
    }).afterClosed().subscribe({
      next: () => {
        this.obtenerTodos()
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}