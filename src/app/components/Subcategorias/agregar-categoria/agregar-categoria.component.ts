import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subcategoria, SubcategoriaDtoIn } from 'src/app/interfaces/subcategoria';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent {

  constructor(
    private servicio: RepositorioService,
    private dialogRef: MatDialogRef<AgregarCategoriaComponent>,
    private snackBar: MatSnackBar
  ) { }

  agregar(subcategoriaIn: SubcategoriaDtoIn) {
    //console.log(subcategoria)
    // this.servicio.subcategoria.agregar(subcategoriaIn).subscribe({
    //   next: (data) => {
        const subcategoria: Subcategoria = {
          cantidad: subcategoriaIn.cantidad,
          categoriaId: subcategoriaIn.categoriaId,
          guid: subcategoriaIn.guid,
          id: 258988,//data.id,
          nombre: subcategoriaIn.nombre,
          total: 0,
          categoria: { id: subcategoriaIn.categoriaId, nombre: '' }
        }
        this.dialogRef.close(subcategoria)
        this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
    //   }
    // })
  }
}
