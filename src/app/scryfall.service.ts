import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  private baseUrl = 'https://api.scryfall.com';

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cards/search?q=c%3Awhite+pow%3D3`);
  }
}
