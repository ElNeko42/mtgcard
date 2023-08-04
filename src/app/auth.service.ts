import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/register`, { username, password });
  }

  
  login(username: string, password: string): Observable<string> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(map(response => response.token));
  }
}
