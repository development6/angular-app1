import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //ng g s services/categoria
  constructor(private http: HttpClient) { 
    console.log("Constructor CategoriaService");
    this.cargarCategorias();
    //this.cargarCategoriasWeb();
  }

  //estructura base this.http.get('').subscribe( (respuesta) => {});
  private cargarCategorias(){
    console.log("Metodo privado CargarCategorias");

    //lectura de archivo json local
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: any) => {
      console.log("Respuesta: ",respuesta);
      console.log("Categorias: ",respuesta['frutas']);

    });

  }

  private cargarCategoriasWeb(){

    this.http.get('https://learsixela.github.io/productos_json/productos.json')
    .subscribe( (respuesta) => {
      console.log("Respuesta desde la web: ",respuesta);
      //console.log("Productos: ",respuesta['productos']);
    });
  }
}
