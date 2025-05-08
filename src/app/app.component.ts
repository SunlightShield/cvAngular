import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatTooltipModule,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  
})
export class AppComponent {
  title = 'cv-angular';
}
