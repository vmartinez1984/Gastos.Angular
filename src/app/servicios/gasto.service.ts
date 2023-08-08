import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastoService{
  
  ObtenerPorPeriodoYCategoria(periodoId: number, categoriaId: number): Observable<any>{
    return this.httpClient.get<any>("")
  }
  constructor(private httpClient: HttpClient){}
}