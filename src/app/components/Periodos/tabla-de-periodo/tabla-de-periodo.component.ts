import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GastoDto } from 'src/app/interfaces/gasto';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormularioDeGastoComponent } from '../../Gastos/formulario-de-gasto/formulario-de-gasto.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tabla-de-periodo',
  templateUrl: './tabla-de-periodo.component.html',
  styleUrls: ['./tabla-de-periodo.component.css']
})
export class TablaDePeriodoComponent {
  displayedColumns: string[] = ['select', 'subcategoriaNombre', 'nombre', 'cantidad']
  dataSource = new MatTableDataSource<GastoDto>()
  selection = new SelectionModel<GastoDto>(true, []);
  @ViewChild(MatTable) table!: MatTable<GastoDto>;

  subtotal = 0
  presupuestoSubtotal = 0;

  @Input() gastosInput: GastoDto[] = []
  @Output() gastoOut: EventEmitter<GastoDto> = new EventEmitter<GastoDto>()
  @ViewChild(MatSort) sort!: MatSort;
  total: number = 0;

  constructor(
    private dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private snackbar: MatSnackBar
  ) { }

  ngOnChanges(): void {
    //console.log(this.gastosInput)
    this.dataSource.data = this.gastosInput
    this.subtotal = this.obtenerTotal()
    this.presupuestoSubtotal = this.obtenerTotalDePresupuesto()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.subtotal = 0
    this.presupuestoSubtotal = 0
    this.dataSource.filteredData.forEach(item => {
      this.subtotal += item.cantidad
      this.presupuestoSubtotal += item.presupuesto
    })
  }

  obtenerTotal() {
    var total = 0
    for (let index = 0; index < this.dataSource.data.length; index++) {
      total += this.dataSource.data[index].cantidad
    }

    return total
  }

  obtenerTotalDePresupuesto() {
    var total = 0
    for (let index = 0; index < this.dataSource.data.length; index++) {
      total += this.dataSource.data[index].presupuesto
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

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: GastoDto): string {
    //console.log(this.selection.isSelected(row!))
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  sumarGastos() {
    //console.log(this.selection['_selection'])
    var subtotal = 0
    var presupuesto = 0
    this.selection['_selection'].forEach((gasto: GastoDto) => {
      subtotal += gasto.cantidad
      presupuesto += gasto.presupuesto
    });
    this.snackbar.open("Subtotal: $ " + subtotal + " Presupuesto: $" + presupuesto, "Ok", { duration: 10000 })
    this.dataSource.filteredData = this.selection['_selection']
  }

}