import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
const AUTH_API = 'http://192.168.2.161:8000/api/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  public userDetail$ = new BehaviorSubject<any>('');

  public setUserDetail(data: any) {
    this.userDetail$.next(data);
  }

  public getUsers(): Observable<any> {
    return this.http.get(
      AUTH_API + 'admin',
      httpOptions
    )

  }
  public cancelOrder(order_id: number): Observable<any> {
    return this.http.post(
      AUTH_API + 'cancelOrder', { order_id: order_id },
      httpOptions
    );

  }
  public updateStatus(data: any): Observable<any> {
    return this.http.put(
      'http://192.168.2.161:8000/api/admin/edit', data,
      httpOptions
    );

  }



  public getOrders(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getOrders',
      httpOptions
    )

  }
  public updateUser(user: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'updateUser',
      { user },
      httpOptions
    )

  }
  public createUser(user: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'createUser',
      { ...user },
      httpOptions
    )

  }

  public deleteUser(user_id: number): Observable<any> {
    return this.http.post(
      AUTH_API + 'deleteUser', { user_id: user_id },
      httpOptions
    )

  }
  public deleteBook(book_id: number): Observable<any> {
    return this.http.post(
      AUTH_API + 'deleteBook', { book_id: book_id },
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
