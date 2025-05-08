import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-proyecto-modal',
  imports: [MatButtonModule],
  templateUrl: './proyecto-modal.component.html',
  styleUrl: './proyecto-modal.component.css'
})
export class ProyectoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { titulo: string; descripcion: string; link1: string; link2: string }) {}
}
