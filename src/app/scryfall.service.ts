import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {
  private baseUrl = 'https://api.scryfall.com';

  constructor(private http: HttpClient) { }

  searchCards(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cards/search?q=${query}`);
  }

  getCard(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cards/${id}`);
  }
  getCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards/search?q=set:m21&format`);
  }
  getRandomCard(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cards/random`);
  }
}
