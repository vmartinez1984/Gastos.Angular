import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Periodo, PeriodoDtoIn } from 'src/app/interfaces/periodo';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-borrar-periodo',
  templateUrl: './borrar-periodo.component.html',
  styleUrls: ['./borrar-periodo.component.css']
})
export class BorrarPeriodoComponent implements OnInit {
  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<BorrarPeriodoComponent>,
    private snackBar: MatSnackBar,
    private servicio: RepositorioService,
    @Inject(MAT_DIALOG_DATA) private periodo: Periodo
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

  borrar() {
    //console.log(this.formGroup.value)   
    this.servicio.periodo.borrar(this.periodo.id).subscribe({
      next: () => {
        this.dialog.close()
        this.snackBar.open("Datos eliminados", ":(", { duration: 3000 })
      }, error: (data) => {
        console.log(data)
        this.dialog.close()
        this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
      }
    })
  }

}
