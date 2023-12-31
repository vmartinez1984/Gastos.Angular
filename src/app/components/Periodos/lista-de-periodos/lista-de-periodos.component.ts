import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodoDto } from 'src/app/interfaces/periodo';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { FormularioDePeriodoComponent } from '../formulario-de-periodo/formulario-de-periodo.component';
import { BorrarPeriodoComponent } from '../borrar-periodo/borrar-periodo.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-de-periodos',
  templateUrl: './lista-de-periodos.component.html',
  styleUrls: ['./lista-de-periodos.component.css']
})
export class ListaDePeriodosComponent {
  displayedColumns: string[] = ['nombre', 'fechaInicial', 'fechaFinal','acciones'];
  dataSource = new MatTableDataSource<PeriodoDto>()
  estaCargando=  false
   
  constructor(
    private dialog: MatDialog,
    private sevicio: RepositorioService,
    private snackbar: MatSnackBar
  ) {
    this.obtenerPeridos()
  }

  obtenerPeridos() {
    this.estaCargando = true
    this.sevicio.periodo.obtenerTodos().subscribe({
      next: (data) => {
        this.dataSource.data = data
        this.estaCargando = false
      },error:(err) =>{
        console.log(err)
        this.snackbar.open(JSON.stringify(err), ":(")
      },
    })
  }

  agregar(){
    this.dialog.open(FormularioDePeriodoComponent,{
      disableClose: true,
      width:"60%"
    }).afterClosed().subscribe({next:()=>{
      this.obtenerPeridos()
    }})
  }

  editar(periodo:PeriodoDto){
    this.dialog.open(FormularioDePeriodoComponent,{
      disableClose: true,
      width: "60%",
      data:periodo
    }).afterClosed().subscribe({next:()=>{
      this.obtenerPeridos()
    }})
  }

  borrar(periodo:PeriodoDto){
    this.dialog.open(BorrarPeriodoComponent,{
      disableClose: true,
      width: "60%",
      data:periodo
    }).afterClosed().subscribe({next:()=>{
      //this.obtenerPeridos()
      var index= this.dataSource.data.indexOf(periodo)
      this.dataSource.data.splice(index,1)
      //console.log(this.dataSource.data)      
      this.dataSource.data = this.dataSource.data
    }})
  }
}
