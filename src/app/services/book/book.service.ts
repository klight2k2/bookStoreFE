import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const AUTH_API = 'http://localhost:3000/api/book/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': 'http://localhost:3000'}),
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getAll',
      httpOptions
    )

  }
  public getDetailBook(book_id:number): Observable<any> {
    return this.http.post(
      AUTH_API + 'getDetailBook',{book_id:book_id},

      httpOptions
    )

  }
  public getTrendingBook(): Observable<any> {
    return this.http.get(
      AUTH_API + 'trending',
      httpOptions
    )

  }
  public getCategories(): Observable<any> {
    return this.http.get(
      AUTH_API + 'categories',
      httpOptions
    )

  }
  public searchByCategory(categoryId:number): Observable<any> {
    return this.http.post(
      AUTH_API + 'searchByCategory',
      {categoryId:categoryId},
      httpOptions
    )

  }
  public getPublishers(): Observable<any> {
    return this.http.get(
      AUTH_API + 'publishers',
      httpOptions
    )

  }
  public searchAdvance(data:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'searchAdvance',{...data},
      httpOptions
    )

  }

  public searchByTitle(data:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'search',{...data},
      httpOptions
    )

  }


}
