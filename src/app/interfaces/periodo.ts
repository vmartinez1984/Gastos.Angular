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
