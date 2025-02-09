import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf,NgClass,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facebook';
  nombre: string = 'Mauricio';
  imagen = `https://robohash.org/${this.nombre}`;
  colores: string[] = ['rojo', 'verde', 'azul', 'amarillo'];
  haynotificacion: boolean = true;
  colorBackground: string = 'purple';
  userRole: string = 'admin';
}
