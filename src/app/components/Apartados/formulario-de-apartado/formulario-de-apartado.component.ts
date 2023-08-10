import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'src/app/helpers/Guid';
import { ApartadoDto, ApartadoDtoIn } from 'src/app/interfaces/apartado';
import { Subcategoria, SubcategoriaDtoIn } from 'src/app/interfaces/subcategoria';
import { TipoDeApartadoDto } from 'src/app/interfaces/tipoDeApartado';
import { RepositorioService } from 'src/app/servicios/repositorio.service';


@Component({
  selector: 'app-formulario-de-apartado',
  templateUrl: './formulario-de-apartado.component.html',
  styleUrls: ['./formulario-de-apartado.component.css']
})
export class FormularioDeApartadoComponent implements OnInit {
  public formGroup: FormGroup
  subtitulo: string = "Agregar"
  subcategorias: Subcategoria[] = []
  tipoDeApartados: TipoDeApartadoDto[] = []

  constructor(
    private dialogRef: MatDialogRef<FormularioDeApartadoComponent>,
    private repositorio: RepositorioService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public apartado: ApartadoDto
  ) {
    this.obtenerTipoDeApartados()
    this.obtenerSubcategorias()
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      interes: ["", Validators.required],
      cantidadInicial: ["", Validators.required],
      cantidadFinal: ["", Validators.required],
      fechaInicial: ["", Validators.required],
      fechaFinal: ["", Validators.required],
      tipoDeApartadoId: ["", Validators.required],
      subcategoriaId: ["", Validators.required]
    })
  }

  obtenerTipoDeApartados() {
    this.repositorio.tipoDeApartado.obtenerTodos().subscribe({
      next: (data) => {
        this.tipoDeApartados = data
      }
    })
  }

  ngOnInit(): void {
    console.log(this.apartado)
    if (this.apartado) {
      this.formGroup.patchValue({
        cantidadFinal: this.apartado.cantidadFinal,
        cantidadInicial: this.apartado.cantidadInicial,
        fechaFinal: this.apartado.fechaFinal,
        fechaInicial: this.apartado.fechaInicial,
        interes: this.apartado.intereses,
        nombre: this.apartado.nombre,
        subcategoriaId: this.apartado.subcategoria.id,
        tipoDeApartadoId: this.apartado.tipoDeApartado.id
      })
      this.subtitulo = "Actualizar"
    }
  }

  guardar() {
    console.log(this.apartado)
    const apartado: ApartadoDtoIn = {
      cantidadFinal: this.formGroup.value.cantidadFinal,
      cantidadInicial: this.formGroup.value.cantidadInicial,
      fechaFinal: this.formGroup.value.fechaFinal,
      fechaInicial: this.formGroup.value.fechaInicial,
      guid: Guid.newGuid(),
      intereses: this.formGroup.value.interes,
      nombre: this.formGroup.value.nombre,
      subcategoriaIdGuid: this.formGroup.value.subcategoriaId + "",
      tipoDeApartadoId: this.formGroup.value.tipoDeApartadoId + ""
    }
    console.log(apartado)
    if (this.apartado) {
      this.repositorio.apartado.actualizar(this.apartado.id, apartado).subscribe({
        next: (data) => {
          this.dialogRef.close()
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
        }
      })
    } else {
      this.repositorio.apartado.agregar(apartado).subscribe({
        next: (data) => {
          this.dialogRef.close()
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
        }
      })
    }
  }

  obtenerSubcategorias() {
    this.repositorio.subcategoria.obtenerTodos().subscribe({
      next: (data) => {
        this.subcategorias = data
      }
    })
  }


}
