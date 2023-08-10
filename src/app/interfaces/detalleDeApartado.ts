import { Subcategoria } from "./subcategoria"

export interface DetalleDeApartadoDto {
    apartadoId: number
    cantidad: number
    nota: string
    periodoId: number
    fechaDeRegistro: Date
    id: number
    guid: string
    subcategoria: Subcategoria
}

export interface DetalleDeApartadoDtoIn{
    guid: string
    apartadoIdGuid: string
    cantidad: number
    nota: string
    periodoIdGuid:string
    subcategoriaIdGuid: string
}