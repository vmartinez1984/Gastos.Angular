import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApartadoDto } from 'src/app/interfaces/apartado';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioDeApartadoComponent } from '../formulario-de-apartado/formulario-de-apartado.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-de-apartados',
  templateUrl: './lista-de-apartados.component.html',
  styleUrls: ['./lista-de-apartados.component.css']
})
export class ListaDeApartadosComponent implements AfterViewInit {
  displayedColumns: string[] = ['subcategoriaNombre', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource<ApartadoDto>();
  apartados: ApartadoDto[] = []  

  @ViewChild(MatSort) sort!: MatSort;
  estaCargando = false
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
    this.estaCargando = true
    this.servicio.apartado.obtenerTodos().subscribe({
      next: (data) => {
        console.log(data)
        this.apartados = data;
        data.forEach(item => {
          item.subcategoriaNombre = item.subcategoria.nombre
          item.tipoDeApartadoNombre = item.tipoDeApartado.nombre
        })
        this.dataSource.data = data
        this.estaCargando = false
      }
    })
  }

  editar(apartado: ApartadoDto) {
    //console.log(apartado)
    this.dialog.open(FormularioDeApartadoComponent, {
      disableClose: true,
      width: "70%",
      data: apartado
    }).afterClosed().subscribe({
      next: () => {
        this.obtenerTodos()
      }
    })
  }

  borrar(apartado: ApartadoDto) {
    this.dialog.open(FormularioDeApartadoComponent, {
      disableClose: true,
      width: "70%",
      data: apartado
    }).afterClosed().subscribe({
      next: () => {
        this.obtenerTodos()
      }
    })
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

  obtenerTotal(apartado: ApartadoDto): number{
    return apartado.listaDeDetalles.map(item=> item.cantidad).reduce((a: number,b: number)=>  a + b, 0)
  }
}