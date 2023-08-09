import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { TipoDeApartadoDto } from '../interfaces/tipoDeApartado';

@Injectable({
  providedIn: 'root'
})
export class TipoDeApartadoService {

  obtenerTodos():Observable<TipoDeApartadoDto[]>{
    return this.httpClient.get<TipoDeApartadoDto[]>(this.url)
  }

  constructor(private httpClient: HttpClient) { }

  private url = environment.urlBase + "TiposDeApartados"
}
