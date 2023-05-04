import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent, PersonajesComponent, AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ]
})

export class DbzModule { }
