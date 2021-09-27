import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { CategoriaComponent } from './general/categoria/categoria.component';
import { ProductosComponent } from './general/productos/productos.component';
import { NotFoundComponent } from './compartida/not-found/not-found.component';
import { ConstruccionComponent } from './construccion/construccion.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    CategoriaComponent,
    ProductosComponent,
    NotFoundComponent,
    ConstruccionComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //siempre se debe importar
    //FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
