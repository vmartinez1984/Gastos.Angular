import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GastoDto } from 'src/app/interfaces/gasto';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioDeGastoComponent } from '../../Gastos/formulario-de-gasto/formulario-de-gasto.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-de-periodo',
  templateUrl: './tabla-de-periodo.component.html',
  styleUrls: ['./tabla-de-periodo.component.css']
})
export class TablaDePeriodoComponent {
  displayedColumns: string[] = ['subcategoriaNombre', 'nombre', 'cantidad']
  dataSource = new MatTableDataSource<GastoDto>()

  @Input() gastosInput: GastoDto[] = []
  @Output() gastoOut: EventEmitter<GastoDto> = new EventEmitter<GastoDto>()

  constructor(private dialog: MatDialog) { }

  ngOnChanges(): void {
    console.log(this.gastosInput)
    this.dataSource.data = this.gastosInput
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
 
  editarGasto(gasto: GastoDto) {
    //console.log("Editar", gasto)
    this.dialog.open(FormularioDeGastoComponent, {
      disableClose: true,
      width: "60%",
      data: gasto
    }).afterClosed().subscribe(
      (data) => {
        console.log(data)
        //Parchamos el item
        this.gastoOut.emit(gasto)
        var index = this.gastosInput.findIndex(x => x.id == gasto.id)
        this.gastosInput[index].nombre = gasto.nombre
        this.gastosInput[index].cantidad = gasto.cantidad
        console.log(this.gastosInput[index])        
      }
    )
  }

}
