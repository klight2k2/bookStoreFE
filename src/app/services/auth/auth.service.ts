import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/services/common.service';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { catchError, of, throwError } from 'rxjs';
const AUTH_API = 'http://192.168.2.161:8000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient,
    private commonService: CommonService,
    private localStorageService: LocalStorageService) { }
  public login(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      data,
      httpOptions
    )

  }
  public register(data: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      data,
      httpOptions
    );
  }



  signOut() {
    this.commonService.setLogined(false);
    this.commonService.setUser({});
    this.localStorageService.removeToken();
  }
  checkLogin() {
    const token = this.localStorageService.getToken() || '';
    if (!!token) {
      const user = this.localStorageService.get('user');
      this.commonService.setUser(user);
      this.commonService.setLogined(true);
    }
    this.commonService.setLoading(false)
  }
}
