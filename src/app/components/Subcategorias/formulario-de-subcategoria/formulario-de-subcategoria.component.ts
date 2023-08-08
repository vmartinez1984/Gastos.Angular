import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'src/app/helpers/Guid';
import { Categoria } from 'src/app/interfaces/categoria';
import { Subcategoria, SubcategoriaDtoIn } from 'src/app/interfaces/subcategoria';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-formulario-de-subcategoria',
  templateUrl: './formulario-de-subcategoria.component.html',
  styleUrls: ['./formulario-de-subcategoria.component.css']
})
export class FormularioDeSubcategoriaComponent implements OnInit {
  categorias: Categoria[] = []
  public formGroup: FormGroup
  subtitulo: string = "Agregar"

  constructor(
    private dialogRef: MatDialogRef<FormularioDeSubcategoriaComponent>,
    private repositorio: RepositorioService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public subcategoria: Subcategoria
  ) {
    this.obtenerCategorias()
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      categoriaId: ["", Validators.required],
      cantidad: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.subcategoria)
    if (this.subcategoria) {
      this.formGroup.patchValue({
        nombre: this.subcategoria.nombre,
        categoriaId: this.subcategoria.categoria.id,
        cantidad: this.subcategoria.cantidad
      })
      this.subtitulo = "Actualizar"
    }
  }

  obtenerCategorias() {
    this.repositorio.categoria.obtenerTodos().subscribe({
      next: (data) => {
        //console.log(data)
        this.categorias = data
      }
    })
  }

  guardarSubcategoria() {
    if (this.subcategoria) {
      const subcategoria: SubcategoriaDtoIn = {
        cantidad: this.formGroup.value.cantidad,
        categoriaId: this.formGroup.value.categoriaId,
        nombre: this.formGroup.value.nombre,
        guid: ""
      }
      this.repositorio.subcategoria.actualizar(this.subcategoria.id, subcategoria).subscribe({
        next: (data) => {
          console.log(data)
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
        }
        , error: (data) => {
          console.log(data)
          this.snackBar.open("Valio pepino. ", ":(", { duration: 3000 })
        }
      })      
    } else {
      const subcategoria: SubcategoriaDtoIn = {
        cantidad: this.formGroup.value.cantidad,
        categoriaId: this.formGroup.value.categoriaId,
        nombre: this.formGroup.value.nombre,
        guid: Guid.newGuid()
      }
      console.log(subcategoria)
      this.repositorio.subcategoria.agregar(subcategoria).subscribe({
        next: (data) => {
          //console.log(data)
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
        }
        , error: (data) => {
          console.log(data)
          this.snackBar.open("Valio pepino. ", ":(", { duration: 3000 })
        }
      })
    }
    this.dialogRef.close()
  }
}
