import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  //@Input() subcategoria!: Subcategoria
  @Output() eventEmitter: EventEmitter<SubcategoriaDtoIn> = new EventEmitter<SubcategoriaDtoIn>()

  constructor(
    private repositorio: RepositorioService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      categoriaId: ['', [Validators.required, Validators.max(3), Validators.min(1)]],
      cantidad: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.obtenerCategorias()
    // console.log(this.subcategoria)
    // if (this.subcategoria) {
    //   this.formGroup.patchValue({
    //     nombre: this.subcategoria.nombre,
    //     categoriaId: this.subcategoria.categoria.id,
    //     cantidad: this.subcategoria.cantidad
    //   })
    // }
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
    if (this.formGroup.valid) {
      const subcategoria: SubcategoriaDtoIn = {
        cantidad: this.formGroup.value.cantidad,
        categoriaId: this.formGroup.value.categoriaId,
        guid: Guid.newGuid(),
        nombre: this.formGroup.value.nombre,
      }
      this.eventEmitter.emit(subcategoria)
    }
  }
}
