import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ProyectoModalComponent } from '../modales/proyecto-modal/proyecto-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-proyectos',
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './card-proyectos.component.html',
  styleUrl: './card-proyectos.component.css'
})
export class CardProyectosComponent {
  constructor(private dialog: MatDialog) {}

  proyectos = [
    { titulo: 'Crud Abogados (Node.js + react)', descripcion: 'Reto tecnico para un puesto full stack junior, un proyecto creado en react con apis creadas en node, la data se guarda en una base de datos SQL', link1: "https://github.com/SunlightShield/front-node-api", link2:"https://github.com/SunlightShield/nodeApi" },
    { titulo: 'Proyecto React-Redux', descripcion: 'Proyecto React-Redux para un reto tecnico de full stack, con Node.js, Express y Sequalizer', link1: "https://github.com/SunlightShield/pruebaTecnicaTCITFront", link2:"https://github.com/SunlightShield/pruebaTecnicaTCITBack" },
    { titulo: 'Portafolio React', descripcion: 'La primera version de mi portafolio, creado en React', link1: "https://github.com/SunlightShield/PortafolioReact" },
    { titulo: 'OCR-Python', descripcion: 'Un nuevo proyecto en el que estoy trabajando, un OCR de lectura de PDF con Python', link1: "https://github.com/SunlightShield/pythonOcrBackend" },
  ];

  abrirModal(proyecto: any): void {
    this.dialog.open(ProyectoModalComponent, {
      width: '400px',
      data: {
        titulo: proyecto.titulo,
        descripcion: proyecto.descripcion,
      },
    });
  }
}

