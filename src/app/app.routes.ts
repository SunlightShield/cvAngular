import { Routes } from '@angular/router';
import { JiraCopyComponent } from './pages/jira-copy/jira-copy.component';
import { DescargaCvComponent } from './pages/descarga-cv/descarga-cv.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    {path: 'jira-copy', component: JiraCopyComponent},
    {path: 'descarga-cv', component: DescargaCvComponent},
 ];
