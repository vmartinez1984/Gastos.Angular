import { Subcategoria } from "./subcategoria"

export interface GastoDto {
    nombre: string
    cantidad: number
    periodoId: number
    idemPotency: string
    id: number
    subcategoria: Subcategoria
    presupuesto: number
    total: number
    fechaDeRegistro: Date
}

export interface GastoDtoIn {
    nombre: string
    cantidad: number
    guid: string
    subcategoriaGuidId: string
    periodoGuidId: string
}