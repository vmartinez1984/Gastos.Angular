import { Injectable } from '@angular/core';
import { SubcategoriaService } from './subcategoria.service';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from './categoria.service';
import { PeriodoService } from './periodo.service';
import { GastoService } from './gasto.service';
import { ApartadoService } from './apartado.service';
import { TipoDeApartadoService } from './tipo-de-apartado.service';
import { DetalleDeApartadoService } from './detalle-de-apartado.service';
import { VersionDePresupuestoService } from './version-de-presupuesto.service';
import { PresupuestoService } from './presupuesto.service';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  public subcategoria: SubcategoriaService

  public categoria: CategoriaService

  public periodo: PeriodoService

  public gasto: GastoService

  public apartado: ApartadoService

  public tipoDeApartado: TipoDeApartadoService

  public detalleDeApartado: DetalleDeApartadoService

  public versionDePresupuesto: VersionDePresupuestoService

  public presupuesto: PresupuestoService

  constructor(httpClient: HttpClient) {
    this.subcategoria = new SubcategoriaService(httpClient)
    this.categoria = new CategoriaService(httpClient)
    this.periodo = new PeriodoService(httpClient)
    this.gasto = new GastoService(httpClient)
    this.apartado = new ApartadoService(httpClient)
    this.tipoDeApartado = new TipoDeApartadoService(httpClient)
    this.detalleDeApartado = new DetalleDeApartadoService(httpClient)
    this.versionDePresupuesto = new VersionDePresupuestoService(httpClient)
    this.presupuesto = new PresupuestoService(httpClient)
  }
}
