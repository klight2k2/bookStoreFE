import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const AUTH_API = 'http://localhost:3000/api/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': 'http://localhost:3000'}),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public orders(data:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'orders',data,
      httpOptions
    )

  }
  public getPurchase(): Observable<any> {
    return this.http.get(
      AUTH_API + 'purchase',
      httpOptions
    )

  }
  public cancelOrder(order_id:number): Observable<any> {
    return this.http.post(
      AUTH_API + 'cancel',
      {order_id:order_id}
      ,
      httpOptions
    )

  }

}
