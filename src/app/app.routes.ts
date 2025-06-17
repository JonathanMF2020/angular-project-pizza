import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DesignComponent } from './pages/design/design.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ruta raíz
  { path: 'design', component: DesignComponent }, // ruta /about
];
