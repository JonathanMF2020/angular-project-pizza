import { Routes } from '@angular/router';
import { PizzasComponent } from './features/pizzas/pizzas.component';
import { DesignComponent } from './features/design/design.component';

export const routes: Routes = [
  { path: '', component: PizzasComponent }, // ruta raíz
  { path: 'design', component: DesignComponent }, // ruta /about
];
