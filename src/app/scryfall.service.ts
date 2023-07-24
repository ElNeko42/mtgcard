import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {
  private baseUrl = 'https://api.scryfall.com'; 

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards/search?q=set:m21&format`);
  }
  getCard(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards/${id}`);
  }
}
