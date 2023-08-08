import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url: string = environment.urlBase + "categorias"
  constructor(private httpClient: HttpClient) { }

  obtenerTodos():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(this.url)
  }
}
