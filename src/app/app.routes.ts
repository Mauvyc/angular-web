import { Routes } from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductDetailComponent} from './productos/product-detail/product-detail.component';

// Estas son las rutas que se muestran en los enlaces de las paginas web

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: ProductDetailComponent},
];
