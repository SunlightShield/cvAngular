import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proyecto-modal',
  imports: [],
  templateUrl: './proyecto-modal.component.html',
  styleUrl: './proyecto-modal.component.css'
})
export class ProyectoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { titulo: string; descripcion: string }) {}
}
