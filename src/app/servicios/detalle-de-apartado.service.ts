import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { DetalleDeApartadoDtoIn } from '../interfaces/detalleDeApartado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleDeApartadoService {

  actualizar(id: number, detalle: DetalleDeApartadoDtoIn): Observable<any> {
    return this.httpclient.put<any>(this.url + "/" + id, detalle)
  }

  agregar(detalle: DetalleDeApartadoDtoIn): Observable<any> {
    return this.httpclient.post<any>(this.url, detalle)
  }

  constructor(private httpclient: HttpClient) { }

  private url = environment.urlBase + "DetalleDeApartados"
}
