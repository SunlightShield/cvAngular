import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-lenguajes',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-lenguajes.component.html',
  styleUrl: './card-lenguajes.component.css'
})
export class CardLenguajesComponent {
  tecnologias = [
    { nombre: 'Angular, para desarrollo Front End', img: 'assets/img/img-tech/angular.webp' },
    { nombre: 'React, para desarrollo Front End', img: 'assets/img/img-tech/react.png' },
    { nombre: 'C#, para desarrollo de Backend', img: 'assets/img/img-tech/c.png' },
    { nombre: 'Python, para desarrollo de Backend', img: 'assets/img/img-tech/python.png' },
    { nombre: 'Node.js, para desarrollo de Backend', img: 'assets/img/img-tech/node.png' },
    { nombre: 'Git, para el versionamiento ', img: 'assets/img/img-tech/git.png' }
  ];
}
