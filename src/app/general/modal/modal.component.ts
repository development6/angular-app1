import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() titulo:any = null;
  @Input() detalle:any = null;
  @Input() accion:any = null;
  @Input() Fecha:any = null;

  mensaje: string | undefined;

  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

//metodos de
  enviarDatos(){
    this.mensaje = 'Enviando datos al padre';
    console.log("enviar datos ", this.mensaje)
    this.propagar.emit(this.mensaje);
  }

}
