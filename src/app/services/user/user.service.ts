import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const AUTH_API = 'http://192.168.2.161:8000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserInfo(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'user/info', data,
      httpOptions
    )

  }
  public getComment(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'feedback', data,
      httpOptions
    )

  }
  public postComment(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'feedback/add', data,
      httpOptions
    )

  }
  public booking(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'schedule/book', data,
      httpOptions
    )
  }
  public addSchedule(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'schedule/add', data,
      httpOptions
    )
  }

  public saveUser(data: any): Observable<any> {
    let formdata = new FormData();
    console.log(data.avatar);

    formdata.append('job', data.job);
    formdata.append('dob', data.dob);
    formdata.append('tel', data.tel);
    formdata.append('address', data.address);
    formdata.append('image', data.image);

    console.log(formdata);
    return this.http.put(
      AUTH_API + 'user/edit', formdata,
    )

  }

  public searchSchedule(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'schedule/search', data,
      httpOptions
    )

  }
  public orders(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'orders', data,
      httpOptions
    )

  }
  public getPurchase(): Observable<any> {
    return this.http.get(
      AUTH_API + 'purchase',
      httpOptions
    )

  }
  public getMySchedule(): Observable<any> {
    return this.http.get(
      AUTH_API + 'schedule/me',
      httpOptions
    )

  }
  public cancelOrder(order_id: number): Observable<any> {
    return this.http.post(
      AUTH_API + 'cancel',
      { order_id: order_id }
      ,
      httpOptions
    )

  }

}
