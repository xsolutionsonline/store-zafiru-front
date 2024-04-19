import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
import { Superhero } from 'src/app/core/models/superhero';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private readonly apiUrl = environment.urlMarvel;

  constructor(private loadingController: LoadingController,
    private translate:TranslateService
  ) { }

  async getCharacters(limit: number = 10): Promise<Superhero[]> {
    const loading = await this.loadingController.create({
      message: this.translate.instant('loading_message')
    });
    await loading.present();
    const options = {
      url: this.apiUrl,
      params: {
        limit: limit.toString()
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:8100',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    };

    try {
      const response: HttpResponse = await CapacitorHttp.get(options);
      const data = response.data;
      const superheroes: Superhero[] = data.data.results.map((result: any) => {
        return {
          id: result.id,
          name: result.name,
          thumbnail: {
            path: result.thumbnail.path,
            extension: result.thumbnail.extension
          },
          comics: {
            available: result.comics.available
          },
          series: {
            available: result.series.available
          },
          stories: {
            available: result.stories.available
          }
        };
      });

      
      return superheroes;
    } catch (error) {
      throw error;
    } finally {
      await loading.dismiss(); 
    }
  }
}
