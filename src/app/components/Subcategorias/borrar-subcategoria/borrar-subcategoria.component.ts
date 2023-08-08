import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from 'src/app/interfaces/categoria';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-borrar-subcategoria',
  templateUrl: './borrar-subcategoria.component.html',
  styleUrls: ['./borrar-subcategoria.component.css']
})
export class BorrarSubcategoriaComponent {
  categorias: Categoria[] = []
  public formGroup: FormGroup
  estaDesHabilitado = true

  constructor(
    private dialogRef: MatDialogRef<BorrarSubcategoriaComponent>,
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

  borrarSubcategoria() {
    this.repositorio.subcategoria.borrar(this.subcategoria.id).subscribe({
      next: (data) => {
        //console.log(data)
        this.snackBar.open("Datos borrados", ":(", { duration: 3000 })
      }
      , error: (data) => {
        console.log(data)
        this.snackBar.open("Valio pepino. ", ":(", { duration: 3000 })
      }
    })
    this.dialogRef.close()
  }
}
