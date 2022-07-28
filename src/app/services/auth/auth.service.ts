import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Headers': 'Content-Type'}),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      data,
      httpOptions
    );
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(
      AUTH_API + 'register',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }
}
