import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { PresupuestoDto } from '../interfaces/presupuesto-dto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  obtenerTodos(versionId: number): Observable<PresupuestoDto[]> {
    return this, this.httpClient.get<PresupuestoDto[]>(this.url + versionId)
  }

  constructor(private httpClient: HttpClient) { }

  private url: string = environment.urlBase + "Presupuestos/VersionDelPresupuesto/"
}
