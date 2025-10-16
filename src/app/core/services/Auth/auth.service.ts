import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, UserCredentials } from '../../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = '/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: UserCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
