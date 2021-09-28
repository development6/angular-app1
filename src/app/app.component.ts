import { Component } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-app';

  constructor(public productosService: ProductosService,public categoriaService: CategoriaService) { 
    //json o consumo de api
    console.log("App Component")
  }

}
