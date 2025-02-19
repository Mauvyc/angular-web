import {Component, Pipe, PipeTransform} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductosComponent} from './productos/productos.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Facebook';
  // nombre: string = 'Mauricio';
  // imagen = `https://robohash.org/${this.nombre}`;
  // colores: string[] = ['rojo', 'verde', 'azul', 'amarillo'];
  // haynotificacion: boolean = true;
  // colorBackground: string = 'purple';
  // userRole: string = 'admin';
  // today: Date = new Date();
  // sueldo: number = 1242.434;
  // contrasena: string = 'Wasdwasdw123';
  // products: string[] = ['papa', 'camote', 'uva', 'fresa', 'pera', 'mandarina'];
  // price: number[] = [2, 4, 5, 61, 12, 30];
}
