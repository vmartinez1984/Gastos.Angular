import { DetalleDeApartadoDto } from "./detalleDeApartado"
import { Subcategoria } from "./subcategoria"
import { TipoDeApartadoDto } from "./tipoDeApartado"

export interface ApartadoDto {
    nombre: string
    interes: number
    cantidadInicial: number
    cantidadFinal: number
    fechaInicial: Date
    fechaFinal: Date
    id: number
    tipoDeApartado: TipoDeApartadoDto
    tipoDeApartadoNombre: string
    listaDeDetalles: DetalleDeApartadoDto[]
    diasRestantes: number
    subcategoria: Subcategoria
    subcategoriaNombre: string
    guid: string
}

export interface ApartadoDtoIn {
    nombre: string
    interes: number
    cantidadInicial: number
    cantidadFinal: number
    fechaInicial: Date
    fechaFinal: Date
    tipoDeApartadoId: number
    subcategoriaIdGuid: number
    guid: string
}