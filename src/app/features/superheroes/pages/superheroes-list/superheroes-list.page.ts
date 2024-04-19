import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.page.html',
  styleUrls: ['./superheroes-list.page.scss'],
})
export class SuperheroesListPage implements OnInit {
  superheroes: any[] = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.loadSuperheroes();
  }

  async loadSuperheroes() {
    try {
      const response = await this.marvelService.getCharacters(20);
      this.superheroes = response.data.results;
    } catch (error) {
      console.error('Error al cargar los superhéroes:', error);
    }
  }
}
