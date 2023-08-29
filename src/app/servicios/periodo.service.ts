import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { PeridoConDetalles, PeriodoDto, PeriodoDtoIn } from '../interfaces/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  obtenerDetalles(id: number):Observable<PeridoConDetalles> {
    return this.httpClient.get<PeridoConDetalles>(this.url + "/" + id + "/Gastos")
  }
  borrar(id: number): Observable<any> {
    return this.httpClient.get<any>(this.url + "/" + id)
  }
  actualizar(id: number, perido: PeriodoDtoIn): Observable<any> {
    return this.httpClient.put<any>(this.url + "/" + id, perido)
  }
  agregar(perido: PeriodoDtoIn): Observable<any> {
    return this.httpClient.post<any>(this.url, perido)
  }
  obtenerTodos(): Observable<PeriodoDto[]> {
    return this.httpClient.get<PeriodoDto[]>(this.url)
  }

  constructor(private httpClient: HttpClient) { }
  private url = environment.urlBase + "Periodos"
}
