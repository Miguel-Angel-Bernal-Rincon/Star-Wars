import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { NavesComponent } from './naves/naves.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { EspeciesComponent } from './especies/especies.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PeliculasComponent,
    PlanetasComponent,
    NavesComponent,
    VehiculosComponent,
    EspeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
