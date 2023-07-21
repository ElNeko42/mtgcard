import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {
  private baseUrl = 'https://api.scryfall.com'; // Asegúrate de que esta es la URL base correcta

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards/search?q=c%3Awhite+pow%3D3`);
  }

  getCard(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards/${id}`);
  }
}
