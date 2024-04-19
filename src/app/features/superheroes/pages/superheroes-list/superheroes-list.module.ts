import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperheroesListPageRoutingModule } from './superheroes-list-routing.module';

import { SuperheroesListPage } from './superheroes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroesListPageRoutingModule
  ],
  declarations: [SuperheroesListPage]
})
export class SuperheroesListPageModule {}
