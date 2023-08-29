import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subcategoria, SubcategoriaDtoIn } from 'src/app/interfaces/subcategoria';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  actualizar(subcategoria: SubcategoriaDtoIn) {
    console.log(subcategoria)
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public subcategoria: Subcategoria
  ) { }

  ngOnInit(): void {

  }


}
