import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  
})
export class AppComponent {
  title = 'cv-angular';
}
