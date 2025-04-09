import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  
})
export class AppComponent {
  title = 'cv-angular';
}
