export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    precio?: number | string;
}

export interface RootObject {
    productos: Producto[];
  }