import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService }  from 'src/app/services/productos.service';  


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

  constructor(public productosService: ProductosService,
    public categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

}
