import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApartadoDto } from 'src/app/interfaces/apartado';
import { RepositorioService } from 'src/app/servicios/repositorio.service';
import { FormularioDeDetalleDeApartadoComponent } from '../../DetalleDeApartados/formulario-de-detalle-de-apartado/formulario-de-detalle-de-apartado.component';
import { DetalleDeApartadoDto, DetalleDeApartadoDtoIn } from 'src/app/interfaces/detalleDeApartado';

@Component({
  selector: 'app-detalles-de-apartado',
  templateUrl: './detalles-de-apartado.component.html',
  styleUrls: ['./detalles-de-apartado.component.css']
})
export class DetallesDeApartadoComponent {
  agregar() {
    var detalle: DetalleDeApartadoDto = {
      apartadoId: this.apartado.id,
      cantidad: 0,
      fechaDeRegistro: this.apartado.fechaFinal,
      guid: "",
      id: 0,
      nota: "",
      periodoId: 0,
      subcategoria: this.apartado.subcategoria
    }
    this.dialog.open(FormularioDeDetalleDeApartadoComponent, {
      disableClose: true,
      width: "60%",
      data: detalle
    }).afterClosed().subscribe({
      next: () => {
        this.obtenerDetalles()
      }
    })
  }

  apartado!: ApartadoDto
  total: number = 0
  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: RepositorioService,
    private dialog: MatDialog
  ) {
    this.obtenerDetalles()
  }

  obtenerDetalles() {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.servicio.apartado.obtener(id).subscribe({
      next: (data) => {
        console.log(data)
        this.apartado = data
        this.apartado.listaDeDetalles.forEach(element => {
          this.total += element.cantidad
        });
      }
    })
  }

}
