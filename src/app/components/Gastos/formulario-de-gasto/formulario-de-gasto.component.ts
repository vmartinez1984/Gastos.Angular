import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'src/app/helpers/Guid';
import { ApartadoDto } from 'src/app/interfaces/apartado';
import { GastoDto, GastoDtoIn } from 'src/app/interfaces/gasto';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-formulario-de-gasto',
  templateUrl: './formulario-de-gasto.component.html',
  styleUrls: ['./formulario-de-gasto.component.css']
})
export class FormularioDeGastoComponent implements OnInit {
  formGroup: FormGroup
  subtitulo: string = "Guardar"
  apartados: ApartadoDto[]=[]
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<FormularioDeGastoComponent>,
    private snackBar: MatSnackBar,
    private servicio: RepositorioService,
    @Inject(MAT_DIALOG_DATA) public gasto: GastoDto
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      cantidad: ["", Validators.required]
    })
    console.log(this.gasto)
    this.obtenerApartados()
  }

  obtenerApartados() {
    this.servicio.apartado.obtenerTodos().subscribe({next:(data)=>{
      var apartados: ApartadoDto[]= []
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element.subcategoria.id == this.gasto.subcategoria.id){
          apartados.push(element);
        }
      }
      this.apartados = apartados
    }})
  }

  ngOnInit(): void {
    if (this.gasto.id != 0) {
      this.formGroup.patchValue({
        nombre: this.gasto.nombre,
        cantidad: this.gasto.cantidad
      })
    }
  }

  guardar() {
    const gasto: GastoDtoIn = {
      cantidad: this.formGroup.value.cantidad,
      guid: Guid.newGuid(),
      nombre: this.formGroup.value.nombre,
      periodoGuidId: this.gasto.periodoId + "",
      subcategoriaGuidId: this.gasto.subcategoria.guid
    }
    console.log(gasto)
    console.log(this.formGroup.value)
    if (this.gasto.id == 0) {
      this.servicio.gasto.agregar(gasto).subscribe({
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
      //actualizar
      this.servicio.gasto.actualizar(this.gasto.id, gasto).subscribe({
        next: () => {
          this.dialog.close()
          this.snackBar.open("Datos actualizados", "Ok", { duration: 3000 })
        }, error: (data) => {
          console.log(data)
          this.dialog.close()
          this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
        }
      })
    }
  }
}
