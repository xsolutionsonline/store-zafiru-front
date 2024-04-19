import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ModalController, ToastController } from '@ionic/angular';
import { SuperheroDetailComponent } from '../../components/superhero-detail/superhero-detail.component';
import { Superhero } from 'src/app/core/models/superhero';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.page.html',
  styleUrls: ['./superheroes-list.page.scss'],
})
export class SuperheroesListPage implements OnInit{
  superheroes: Superhero[] = [];

  constructor(
    private marvelService: MarvelService,
    private modalController: ModalController,
    private toastController: ToastController,
    private translate: TranslateService
  ) {
   
   }

  ngOnInit() {
    this.loadSuperheroes();
  }

  async loadSuperheroes() {
    try {
      const superheroes = await this.marvelService.getCharacters();
      this.superheroes = superheroes;
      const successMessage = this.translate.instant('success_message');
      this.presentToast(successMessage, 'success', 3000);
    } catch (error) {
      const errorMessage = this.translate.instant('error_message');
      this.presentToast(errorMessage, 'danger', 7000);
    }
  }

  async openDetailModal(hero: Superhero) {
    const modal = await this.modalController.create({
      component: SuperheroDetailComponent,
      componentProps: { superhero: hero }
    });
    await modal.present();
  }

  async presentToast(message: string, color: string, duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
