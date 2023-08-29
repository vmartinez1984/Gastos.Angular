import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'src/app/helpers/Guid';
import { ApartadoDto } from 'src/app/interfaces/apartado';
import { DetalleDeApartadoDtoIn } from 'src/app/interfaces/detalleDeApartado';
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
  apartados: ApartadoDto[] = []
  estaCargando = false;

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
    this.obtenerApartados()
    //console.log(this.gasto)
  }

  obtenerApartados() {
    this.estaCargando = true
    this.formGroup.disable()
    this.servicio.apartado.obtenerTodos().subscribe({
      next: (data) => {
        //var apartados: ApartadoDto[]= []
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if (element.subcategoria.id == this.gasto.subcategoria.id) {
            this.apartados.push(element);
          }
        }
        //this.apartados = apartados
        //console.log("apartados",this.apartados)
        this.estaCargando = false
        if (this.apartados.length > 0) {
          this.formGroup = this.formBuilder.group({
            nombre: ["", Validators.required],
            cantidad: ["", Validators.required],
            apartadoId: ["", Validators.required]
          })
        }
        if (this.apartados.length == 1) {
          this.formGroup.patchValue({
            apartadoId: this.apartados[0].id
          })
        }
        this.formGroup.enable()
      }
    })
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
    //console.log(this.formGroup.valid)
    if (this.formGroup.valid == false) {
      return
    }
    const gasto: GastoDtoIn = {
      cantidad: this.formGroup.value.cantidad,
      guid: Guid.newGuid(),
      nombre: this.formGroup.value.nombre,
      periodoGuidId: this.gasto.periodoId + "",
      subcategoriaGuidId: this.gasto.subcategoria.guid
    }
    console.log(this.formGroup.value)
    if (this.apartados.length == 0) {
      this.guardarGasto(gasto)
      //this.snackBar.open("Guardar gasto")
    } else {
      this.guardarDetalleDeApartado(gasto, this.formGroup.value.apartadoId)
    }
  }

  guardarDetalleDeApartado(gasto: GastoDtoIn, apartadoId: any) {
    if (this.gasto.id == 0) {
      var detalle: DetalleDeApartadoDtoIn = {
        apartadoIdGuid: apartadoId + "",
        cantidad: gasto.cantidad,
        guid: Guid.newGuid(),
        nota: gasto.nombre,
        periodoIdGuid: gasto.periodoGuidId,
        subcategoriaIdGuid: gasto.subcategoriaGuidId
      }
      this.estaCargando = true
      this.formGroup.disable()
      this.servicio.detalleDeApartado.agregar(detalle).subscribe({
        next: (data) => {
          console.log(data)
          this.dialog.close(this.gasto)
          this.snackBar.open("Datos registrados", ":)", { duration: 3000 })
          this.estaCargando = false
          this.formGroup.enable()
        }, error: (err) => {
          this.snackBar.open("Valio pepino", ":(")
          this.estaCargando = false
          this.formGroup.enable()
        },
      })
    } else {
      this.servicio.detalleDeApartado.actualizar(this.gasto.id, this.formGroup.value).subscribe({
        next: () => {
          this.dialog.close(this.gasto)
          this.snackBar.open("Datos actualizados", "Ok")
        }, error: (err) => {
          this.snackBar.open("Valio pepino", ":(")
          this.estaCargando = false
          this.formGroup.enable()
        }
      })
    }

  }

  guardarGasto(gasto: GastoDtoIn) {
    //console.log(gasto)
    this.estaCargando = true
    if (this.gasto.id == 0) {
      this.servicio.gasto.agregar(gasto).subscribe({
        next: (data) => {
          console.log("respuesta: ", data)
          this.dialog.close(this.gasto)
          this.snackBar.open("Datos registrados", "Ok", { duration: 3000 })
          this.estaCargando = false
        }, error: (data) => {
          console.log(data)
          this.dialog.close()
          this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
          this.estaCargando = false
        }
      })
    } else {
      //actualizar
      this.servicio.gasto.actualizar(this.gasto.id, gasto).subscribe({
        next: () => {
          //console.log(this.gasto)
          this.dialog.close(this.gasto) 
          this.estaCargando = false
          this.snackBar.open("Datos actualizados", "Ok", { duration: 3000 })
        }, error: (data) => {
          console.log(data)
          this.dialog.close()
          this.snackBar.open("Valio pepino", ":(", { duration: 3000 })
          this.estaCargando = false
        }
      })
    }
  }

}
