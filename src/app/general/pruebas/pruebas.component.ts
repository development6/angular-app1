import { formatDate } from '@angular/common';
//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.sass']
})
//export class PruebasComponent implements OnInit {
export class PruebasComponent {
  Titulo: string = 'Curso de Angular Básico';
  Titulo2: string= 'Formularios';

  Fecha: number = new Date().getTime();
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  Fecha2: string = new Date().toString();
  Mes: number = new Date().getMonth() + 1;
  // puede ser de uno de los 3 tipos de datos (number|null|string)
  Dia: number|null = null;
  eliminado:null|string|undefined = null;
  Contador: number = 0;

  dias_semana:string[] = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
//for (let dia of dias_semana)
/*
  constructor() { 
    console.log("Constructor Pruebas");
  }

  ngOnInit(): void {
    console.log("ngOnInit Pruebas");
  }*/

// set y get
  get getMesNumber(): number {
    return this.Mes;
  }

  get getDiaNumber():number|null {
    return this.Dia;
  }

  get getContadorNumber(): number {
    return this.Contador;
  }

//metodos o funciones (logica de negocio)

  obtenerDia(): void {
    this.Dia = new Date().getDay();
  }

  sumar(): void {
    this.Contador++;
  }

  restar(): void {
    this.Contador--;
  }

  eliminar(): void {
    this.eliminado= this.dias_semana.pop();
  }

  agregar(): void {
  }

  insertar(): void {
    console.log(" metodo insertar...");
  }

  insertar2(event: any): void {
    console.log(" metodo insertar 2...");
    event.preventDefault();
    console.log(event);
  }
}
