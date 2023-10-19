import { Component } from '@angular/core';
import { PresupuestoDto } from 'src/app/interfaces/presupuesto-dto';
import { VersionDePresupuestoDto } from 'src/app/interfaces/version-de-presupuesto-dto';
import { RepositorioService } from 'src/app/servicios/repositorio.service';

@Component({
  selector: 'app-lista-de-versiones',
  templateUrl: './lista-de-versiones.component.html',
  styleUrls: ['./lista-de-versiones.component.css']
})
export class ListaDeVersionesComponent {
  versiones: VersionDePresupuestoDto[] = []
  presupuestos: PresupuestoDto[] = []

  constructor(private repository: RepositorioService) {
    this.obtenerVersionDePResupuestos()
  }

  obtenerVersionDePResupuestos() {
    this.repository.versionDePresupuesto.obtenerTodos().subscribe({
      next: (versiones) => {
        this.versiones = versiones
        console.log(this.versiones)
      }
    })
  }

  obtenerListaDePresupuesto(versionId: number) {
    this.repository.presupuesto.obtenerTodos(versionId).subscribe({
      next: (presupuestos) => {
        this.presupuestos = presupuestos
        console.log(this.presupuestos)
      }
    })
  }

  verDetalles(versionId: number) {
    this.obtenerListaDePresupuesto(versionId)
  }
}
