import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroesListPage } from './superheroes-list.page';

const routes: Routes = [
  {
    path: '',
    component: SuperheroesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesListPageRoutingModule {}
