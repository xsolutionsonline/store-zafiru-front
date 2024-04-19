import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private readonly apiUrl = 'http://localhost:3000/';
  
  constructor() { }

  async getCharacters(limit: number = 10): Promise<any> {
   
    const headers = {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:8100',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'Content-Type'
    };

    const options = {
      url: `${this.apiUrl}`,
      headers,
      params: {
        limit: limit.toString()
      }
    };

    try {
      const response = await CapacitorHttp.get(options);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
      throw error;
    }
  }
}
