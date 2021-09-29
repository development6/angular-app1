import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {
    
    productos: Producto[] = [];
    constructor(private http: HttpClient) {
        this.obtenerProductos();
    }


    private obtenerProductos() {
        this.http.get('https://learsixela.github.io/productos_json/productos.json').subscribe((resp: any) => {
            this.productos = resp.productos;
            console.log(this.productos);
        });
    }

}