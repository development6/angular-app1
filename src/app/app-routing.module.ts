import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from './general/productos/productos.component';
import {CategoriaComponent} from './general/categoria/categoria.component';
import {NotFoundComponent} from './compartida/not-found/not-found.component';


//{ path:'nombreruta', component: NombreComponent },
const routes: Routes = [
  { path:'', component: ProductosComponent },
  { path:'categoria', component: CategoriaComponent },
  //componente 404
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
