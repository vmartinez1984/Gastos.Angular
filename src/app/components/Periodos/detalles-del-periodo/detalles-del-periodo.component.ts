import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-detalles-del-periodo',
  templateUrl: './detalles-del-periodo.component.html',
  styleUrls: ['./detalles-del-periodo.component.css']
})
export class DetallesDelPeriodoComponent {

  constructor(
    //private router:Router
    private activatedRoute: ActivatedRoute,
    private servicio: RepositorioService
  ){
    var id =Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.servicio.gasto.ObtenerPorPeriodoYCategoria(id, 1).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

}