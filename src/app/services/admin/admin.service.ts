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



  public addBook(book:any,authorId:number,selectedCategoriesId:any): Observable<any> {
    const formdata = new FormData();
    formdata.append('description', book.description);
    formdata.append('title', book.title);
    formdata.append('price', book.price);
    formdata.append('quantity', book.quantity);
    formdata.append('pages', book.pages);
    formdata.append('publisher', book.publisher);
    formdata.append('image', book.image);
    formdata.append('author_id', String(authorId));
    formdata.append('category_id', selectedCategoriesId);
    // console.log(book.image,"ha");
    console.log(formdata);

    return this.http.post(
      AUTH_API + 'addBook',formdata
    )

  }

  public getUsers(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getUsers',
      httpOptions
    )

  }
  public cancelOrder(order_id:number): Observable<any> {
    return this.http.post(
      AUTH_API + 'cancelOrder',{order_id:order_id},
      httpOptions
    );

  }
  public updateStatus(data:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'updateStatus',data,
      httpOptions
    );

  }



  public getOrders(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getOrders',
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
