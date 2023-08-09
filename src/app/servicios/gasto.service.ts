import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GastoDto, GastoDtoIn } from '../interfaces/gasto';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  agregar(gasto: GastoDtoIn): Observable<any> {
    return this.httpClient.post(this.url, gasto)
  }

  actualizar(id: number, gasto: GastoDtoIn): Observable<any> {
    return this.httpClient.put<any>(this.url + "/" + id, gasto)
  }

  ObtenerTodosPorPeriodo(periodoId: number): Observable<GastoDto[]> {
    return this.httpClient.get<GastoDto[]>(this.url + "/Periodos/" + periodoId)
  }
  constructor(private httpClient: HttpClient) { }
  private url = environment.urlBase + "Gastos"
}