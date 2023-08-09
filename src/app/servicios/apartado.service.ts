import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { ApartadoDto, ApartadoDtoIn } from '../interfaces/apartado';

@Injectable({
  providedIn: 'root'
})
export class ApartadoService {
  actualizar(id: number, apartado: ApartadoDtoIn): Observable<any> {
    return this.httpCliente.put<any>(this.url + id, apartado)
  }
  agregar(apartado: ApartadoDtoIn): Observable<any> {
    return this.httpCliente.post<any>(this.url, apartado)
  }

  obtenerTodos(): Observable<ApartadoDto[]> {
    return this.httpCliente.get<ApartadoDto[]>(this.url)
  }

  constructor(private httpCliente: HttpClient) { }

  private url = environment.urlBase + "Apartados/"
}
