import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'src/app/helpers/Guid';
import { DetalleDeApartadoDto, DetalleDeApartadoDtoIn } from 'src/app/interfaces/detalleDeApartado';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-formulario-de-detalle-de-apartado',
  templateUrl: './formulario-de-detalle-de-apartado.component.html',
  styleUrls: ['./formulario-de-detalle-de-apartado.component.css']
})
export class FormularioDeDetalleDeApartadoComponent implements OnInit {
  guardar() {
    var detalle: DetalleDeApartadoDtoIn = {
      apartadoIdGuid: this.detalle.apartadoId + "",
      cantidad: this.formGroup.value.cantidad,
      nota: this.formGroup.value.nota,
      guid: Guid.newGuid(),
      periodoIdGuid: this.detalle.periodoId + "",
      subcategoriaIdGuid: this.detalle.subcategoria.id + ""
    }
    console.log(detalle)
    this.servicio.detalleDeApartado.agregar(detalle).subscribe({
      next: (data) => {
        this.dialogRef.close()
        this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
      }
    })
  }
  formGroup: FormGroup
  subtitulo: string = "Guardar"

  constructor(
    private formBuilde: FormBuilder,
    private servicio: RepositorioService,
    private dialogRef: MatDialogRef<FormularioDeDetalleDeApartadoComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private detalle: DetalleDeApartadoDto
  ) {
    this.formGroup = this.formBuilde.group({
      cantidad: ["", Validators.required],
      nota: ["", Validators.required]
    })
  }

  ngOnInit(): void {

  }
}
