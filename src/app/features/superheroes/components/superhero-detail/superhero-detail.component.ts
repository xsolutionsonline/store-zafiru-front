import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.scss'],
})
export class SuperheroDetailComponent {

  @Input() superhero: any;

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

}
