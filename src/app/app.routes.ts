import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent},
//   { path: 'artist/:id', component: ArtistaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = (APP_ROUTES);
