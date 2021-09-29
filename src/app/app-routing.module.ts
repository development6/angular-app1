import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from './general/productos/productos.component';
import {CategoriaComponent} from './general/categoria/categoria.component';
import {NotFoundComponent} from './compartida/not-found/not-found.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';


//{ path:'nombreruta', component: NombreComponent },
const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent},
  { path:'productos', component: ProductosComponent },
  { path:'categoria', component: CategoriaComponent },
  { path:'', component: PruebasComponent },
  //componente 404
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
