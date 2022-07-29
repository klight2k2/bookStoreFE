import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const AUTH_API = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Headers': 'Content-Type'}),
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public getTrendingBook(): Observable<any> {
    return this.http.get(
      AUTH_API + 'trending',
      httpOptions
    )

  }


}
