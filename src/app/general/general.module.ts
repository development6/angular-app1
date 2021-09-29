import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [
    CategoriaComponent,
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
