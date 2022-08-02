import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
const AUTH_API = 'http://localhost:3000/api/admin/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }),
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  public userDetail$=new BehaviorSubject<any>('');

  public setUserDetail(data:any){
    this.userDetail$.next(data);
}

  public addBook(book:any): Observable<any> {
    const formdata = new FormData();
    formdata.append('title', book.title);
    formdata.append('description', book.description);
    formdata.append('price', book.price);
    formdata.append('quantity', book.quantity);
    formdata.append('pages', book.pages);
    formdata.append('publisher', book.publisher);
    formdata.append('image', book.image);
    return this.http.post(
      AUTH_API + 'addBook',formdata,
      httpOptions
    )

  }
  public getUsers(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getUsers',
      httpOptions
    )

  }
  public updateUser(user:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'updateUser',
      {user},
      httpOptions
    )

  }
  public createUser(user:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'createUser',
      {...user},
      httpOptions
    )

  }

  public deleteUser(user_id:number): Observable<any> {
    return this.http.post(
      AUTH_API + 'deleteUser',{user_id:user_id},
      httpOptions
    )

  }
  public deleteBook(book_id:number): Observable<any> {
    return this.http.post(
      AUTH_API + 'deleteBook',{book_id:book_id},
      httpOptions
    )

  }
  public getAuthors(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getAuthors',
      httpOptions
    )

  }
  public getAll(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getAll',
      httpOptions
    )

  }

}
