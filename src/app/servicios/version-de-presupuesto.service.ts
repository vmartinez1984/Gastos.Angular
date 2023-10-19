import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { VersionDePresupuestoDto } from '../interfaces/version-de-presupuesto-dto';

@Injectable({
  providedIn: 'root'
})
export class VersionDePresupuestoService {

  obtenerTodos(): Observable<VersionDePresupuestoDto[]>{
    return this.httpClient.get<VersionDePresupuestoDto[]>(this.url)
  }

  constructor(private httpClient: HttpClient) { }

  private url = environment.urlBase + "VersionDePresupuestos"
}
