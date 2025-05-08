import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../about/about.component';
import { CardLenguajesComponent } from '../card-lenguajes/card-lenguajes.component';
import { CardProyectosComponent } from '../card-proyectos/card-proyectos.component';

@Component({
  selector: 'app-inicio',
  imports: [AboutComponent, CardLenguajesComponent, CardProyectosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  textoCompleto = "Hola! soy Sebastián";
  textoMostrar = '';
  velocidad = 100;

  constructor() { }

  ngOnInit(): void {
    this.escribirTexto();
  }

  escribirTexto() {
    let index = 0;
    const intervalo = setInterval(() => {
      this.textoMostrar += this.textoCompleto[index];
      index++;
      if (index === this.textoCompleto.length) {
        clearInterval(intervalo); // Detiene la animación cuando se completa
      }
    }, this.velocidad);
  }
}
