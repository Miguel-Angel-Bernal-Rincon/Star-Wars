import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EspeciesComponent } from './especies/especies.component';
import { NavesComponent } from './naves/naves.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
{ path: 'app', component: AppComponent},
{ path: 'especies', component: EspeciesComponent},
{ path: 'naves', component: NavesComponent},
{ path: 'peliculas', component: PeliculasComponent},
{ path: 'personajes', component: PersonajesComponent},
{ path: 'planetas', component: PlanetasComponent},
{ path: 'vehiculos', component: VehiculosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
