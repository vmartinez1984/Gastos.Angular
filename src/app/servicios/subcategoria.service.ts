import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Subcategoria, SubcategoriaDtoIn } from '../interfaces/subcategoria';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  borrar(id: number):Observable<any> {
    return this.httpClient.delete<any>(this.url + "/"+ id)
  }
  actualizar(id: number, subcategoria: SubcategoriaDtoIn):Observable<any> {
    return this.httpClient.put<any>(this.url + "/"+ id, subcategoria)
  }
  agregar(subcategoria: SubcategoriaDtoIn): Observable<any> {
    return this.httpClient.post<any>(this.url, subcategoria)
  }

  obtenerPorCategoriaId(categoriaId: number): Observable<Subcategoria[]> {
    return this.httpClient.get<Subcategoria[]>(this.url2 + categoriaId + "/Subcategorias")
  }
  url = environment.urlBase + "Subcategorias"
  url2 = environment.urlBase + "Categorias/"

  obtenerTodos(): Observable<Subcategoria[]> {
    return this.httpClient.get<Subcategoria[]>(this.url)
  }

  constructor(private httpClient: HttpClient) {

  }
}
