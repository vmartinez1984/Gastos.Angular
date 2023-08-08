import { Injectable } from '@angular/core';
import { SubcategoriaService } from './subcategoria.service';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from './categoria.service';
import { PeriodoService } from './periodo.service';
import { GastoService } from './gasto.service';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  public subcategoria: SubcategoriaService

  public categoria: CategoriaService

  public periodo: PeriodoService

  public gasto: GastoService

  constructor(httpClient: HttpClient) { 
    this.subcategoria = new SubcategoriaService(httpClient)
    this.categoria = new CategoriaService(httpClient)
    this.periodo = new PeriodoService(httpClient)
    this.gasto = new GastoService(httpClient)
  }
}
