import { Categoria } from "./categoria";

export interface Subcategoria {
    id:number
    categoria: Categoria
    nombre: string
    cantidad: number
    total: number
    guid: string
}

export interface SubcategoriaDtoIn{
    categoriaId: number
    nombre: string
    cantidad: number
    guid: string
}