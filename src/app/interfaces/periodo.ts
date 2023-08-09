import { GastoDto } from "./gasto"

export interface Periodo {
    id:number
    guid: string
    nombre: string
    fechaInicial: Date
    fechaFinal: Date
}

export interface PeriodoDtoIn{
    nombre: string
    fechaInicial: Date
    fechaFinal: Date
    guid: string
}

export interface PeridoConDetalles{
    listaDeGastos: GastoDto[]
    listaDeEntradas: GastoDto[]
    listaDeApartados: GastoDto[]
    id:number
    guid:string
    nombre:string
    fechaInicial:Date
    FechaFinal:Date
}