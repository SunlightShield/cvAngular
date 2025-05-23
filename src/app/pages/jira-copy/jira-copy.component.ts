import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../models/tarea.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-jira-copy',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule],
  templateUrl: './jira-copy.component.html',
  styleUrl: './jira-copy.component.css'
})
export class JiraCopyComponent implements OnInit {

  diasDelMes: number[] = [];
  semanas: number[] = [1, 2, 3, 4, 5];

  tareas: Tarea[] = [];
  displayedColumns: string[] = ['titulo', 'descripcion', 'completada'];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Tarea[]>('https://taskboarddb-hhakfhezh8e0a7g3.canadacentral-01.azurewebsites.net/api/tareas')
      .subscribe({
        next: (data) => {
          this.tareas = data;
          console.log('✅ Tareas desde API:', this.tareas);
        
          //para los dias 
          const diasUnicos = Array.from(
            new Set(this.tareas.map(t => new Date(t.fechaCreacion).getDate()))
          );
    
          this.diasDelMes = diasUnicos.sort((a, b) => a - b);  
        },
        error: (err) => {
          console.error('❌ Error al obtener tareas:', err);
        }
      });
  }


  hayTarea(dia: number, semana: number): boolean {
    return this.tareas.some(t => {
      const fecha = new Date(t.fechaCreacion);
      const diaTarea = fecha.getDate();
      const semanaTarea = t.semanaDelMes;
      return diaTarea === dia && semanaTarea === semana;
    });
  }
}