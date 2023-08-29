import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'src/app/helpers/Guid';
import { PeriodoDto, PeriodoDtoIn } from 'src/app/interfaces/periodo';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-formulario-de-periodo',
  templateUrl: './formulario-de-periodo.component.html',
  styleUrls: ['./formulario-de-periodo.component.css']
})
export class FormularioDePeriodoComponent implements OnInit {
  formGroup: FormGroup
  subtitulo: string = "Guardar"
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<FormularioDePeriodoComponent>,
    private snackBar: MatSnackBar,
    private servicio: RepositorioService,
    @Inject(MAT_DIALOG_DATA) private periodo: PeriodoDto
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      fechaInicial: ["", Validators.required],
      fechaFinal: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    if (this.periodo) {
      this.formGroup.patchValue({
        nombre: this.periodo.nombre,
        fechaInicial: this.periodo.fechaInicial,
        fechaFinal: this.periodo.fechaFinal
      })
    }
  }

  guardar() {
    console.log(this.formGroup.value)
    const perido: PeriodoDtoIn = {
      fechaFinal: this.formGroup.value.fechaFinal,
      fechaInicial: this.formGroup.value.fechaInicial,
      nombre: this.formGroup.value.nombre,
      guid: Guid.newGuid()
    }
    if (this.periodo) {
      //actualizar
      this.servicio.periodo.actualizar(this.periodo.id, perido).subscribe({
        next: () => {
          this.dialog.close()
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
        }, error: (data) => {
          console.log(data)
          this.dialog.close()
          this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
        }
      })
    } else {     
      this.servicio.periodo.agregar(perido).subscribe({
        next: () => {
          this.dialog.close()
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
        }, error: (data) => {
          console.log(data)
          this.dialog.close()
          this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
        }
      })
    }
  }

}
