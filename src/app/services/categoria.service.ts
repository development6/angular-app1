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
  }

  private cargarCategorias(){
    console.log("Metodo privado CargarCategorias");

    //estructura base this.http.get('').subscribe( (respuesta) => {});
    this.http.get('assets/data/productos.json').subscribe( (respuesta) => {
      console.log(respuesta);

    });

  }

}
