import { Component, Input } from '@angular/core';
import { PresupuestoDto } from 'src/app/interfaces/presupuesto-dto';

@Component({
  selector: 'app-lista-de-presupuestos',
  templateUrl: './lista-de-presupuestos.component.html',
  styleUrls: ['./lista-de-presupuestos.component.css']
})
export class ListaDePresupuestosComponent {
  @Input() presupuestos: PresupuestoDto[] = []

  editar(presupuestoId: number){

  }
}
