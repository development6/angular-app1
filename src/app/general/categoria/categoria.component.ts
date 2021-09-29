import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.sass']
})
export class CategoriaComponent implements OnInit {
  Titulo: string= 'Categoria';
  Detalle: string = 'Estamos en Categoria';
  Accion: string = 'Guardar!!';
  Fecha: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  constructor() { }

  ngOnInit(): void {
  }

}
