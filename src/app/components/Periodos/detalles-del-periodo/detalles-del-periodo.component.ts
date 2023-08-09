import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoDto, GastoDtoIn } from 'src/app/interfaces/gasto';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { FormularioDeGastoComponent } from '../../Gastos/formulario-de-gasto/formulario-de-gasto.component';
import { Guid } from 'src/app/helpers/Guid';

@Component({
  selector: 'app-detalles-del-periodo',
  templateUrl: './detalles-del-periodo.component.html',
  styleUrls: ['./detalles-del-periodo.component.css']
})
export class DetallesDelPeriodoComponent {

  displayedColumns: string[] = ['subcategoriaNombre', 'nombre', 'cantidad'];
  dataSource = new MatTableDataSource<GastoDto>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: RepositorioService,
    private dialog: MatDialog
  ) {
    this.obtenerDetallesDelPeriodo()
  }
  
  obtenerDetallesDelPeriodo() {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.servicio.gasto.ObtenerTodosPorPeriodo(id).subscribe({
      next: (data) => {
        //console.log(data)
        this.dataSource.data = data
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerTotal() {
    var total = 0
    for (let index = 0; index < this.dataSource.data.length; index++) {
      total += this.dataSource.data[index].cantidad
    }

    return total
  }

  agregarGasto(gasto: GastoDto) {
    this.dialog.open(FormularioDeGastoComponent, {
      disableClose: true,
      width: "60%",
      data: gasto
    }).afterClosed().subscribe({
      next: () => {
        this.obtenerDetallesDelPeriodo()
      }
    })
  }

  editarGasto(gasto: GastoDto) {
    this.dialog.open(FormularioDeGastoComponent, {
      disableClose: true,
      width: "60%",
      data: gasto
    }).afterClosed().subscribe({
      next: () => {
        this.obtenerDetallesDelPeriodo()
      }
    })
  }
}