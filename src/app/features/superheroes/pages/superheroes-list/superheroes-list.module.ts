import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuperheroesListPageRoutingModule } from './superheroes-list-routing.module';
import { SuperheroesListPage } from './superheroes-list.page';
import { SuperheroDetailComponent } from '../../components/superhero-detail/superhero-detail.component';
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SuperheroesListPageRoutingModule
  ],
  declarations: [SuperheroesListPage,SuperheroDetailComponent]
})
export class SuperheroesListPageModule {}
