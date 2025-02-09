import {Component, Pipe, PipeTransform} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault, PercentPipe,
  UpperCasePipe
} from '@angular/common';

@Pipe({
  name: 'alrevesPipe',
  standalone: true,
})
class MiPipe implements PipeTransform {
  transform(value: string){
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'ofuscar',
  standalone: true,
})
class OfuscarPipe implements PipeTransform {
  transform(value: string){
    return `${value.substring(0,3)}***`
  }
}

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe, LowerCasePipe, DatePipe,
    CurrencyPipe, MiPipe, OfuscarPipe, PercentPipe],
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
  today: Date = new Date();
  sueldo: number = 1242.434;
  contrasena: string = 'Wasdwasdw123';
}
