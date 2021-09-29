import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent,
    PruebasComponent
  ],
  exports: [
    //ModalComponent,
    PruebasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GeneralModule { }
