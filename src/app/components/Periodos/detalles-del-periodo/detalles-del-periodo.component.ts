import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { GastoDto } from 'src/app/interfaces/gasto';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { FormularioDeGastoComponent } from '../../Gastos/formulario-de-gasto/formulario-de-gasto.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalles-del-periodo',
  templateUrl: './detalles-del-periodo.component.html',
  styleUrls: ['./detalles-del-periodo.component.css']
})
export class DetallesDelPeriodoComponent {

  displayedColumns: string[] = ['subcategoriaNombre', 'nombre', 'cantidad']
  gastosEntrada: GastoDto[] = []
  gastos: GastoDto[] = []
  gastosApartado: GastoDto[] = []
  estaCargando = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: RepositorioService,    
    private snackBar: MatSnackBar
  ) {
    this.obtenerDetallesDelPeriodo()
  }

  obtenerDetallesDelPeriodo() {
    this.estaCargando = true
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.servicio.gasto.ObtenerTodosPorPeriodo(id).subscribe({
      next: (data) => {
        //console.log(data)
        this.gastosEntrada = this.obtenerPorCategoriaId(data,1)
        this.gastos = this.obtenerPorCategoriaId(data,2)
        this.gastosApartado = this.obtenerPorCategoriaId(data,3)
        this.estaCargando = false
      }, error: (err) => {
        console.log(err)
        if (err.status == 404)
          this.snackBar.open("Datos no encontrados", ":(", { duration: 3000 })
        else
          this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
        this.estaCargando = false
      },
    })
  }

  obtenerPorCategoriaId(gastos: GastoDto[], categoriaId: number): GastoDto[] {
    var entradas: GastoDto[] = []    

    gastos.forEach(gasto => {
      if (gasto.subcategoria.categoria.id == categoriaId)
        entradas.push(gasto)
    })

    return entradas
  } 

  obtenerTotal() {
    var total = 0
    for (let index = 0; index < this.gastos.length; index++) {
      total += this.gastos[index].cantidad
    }

    return total
  }

}