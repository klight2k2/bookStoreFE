import { Observable } from 'rxjs'
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

  public getUsers(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getUsers',
      httpOptions
    )

  }

}
