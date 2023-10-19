import { DetalleDeApartadoDto } from "./detalleDeApartado"
import { Subcategoria } from "./subcategoria"
import { TipoDeApartadoDto } from "./tipoDeApartado"

export interface ApartadoDto {
    nombre: string
    intereses: number
    cantidadInicial: number
    cantidadFinal: number
    cantidadMeta: number
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
    intereses: number
    cantidadInicial: number
    cantidadFinal: number
    fechaInicial: Date
    fechaFinal: Date
    tipoDeApartadoId: string
    subcategoriaIdGuid: string
    guid: string
}