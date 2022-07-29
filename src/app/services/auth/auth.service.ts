import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/services/common.service';
import { LocalStorageService } from './../localStorage/local-storage.service';
const AUTH_API = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Headers': 'Content-Type'}),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http:HttpClient,
    private commonService:CommonService,
    private localStorageService:LocalStorageService) { }
  login(data:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
     data,
      httpOptions
    );
  }

  signOut(){
    this.commonService.setLogined(false);
    this.commonService.setUser({});
    this.localStorageService.removeToken();
  }
  checkLogin(){
    const token=this.localStorageService.getToken() || '';
    if(!!token){
      console.log(token)
      const user=this.localStorageService.get('user');
      this.commonService.setUser(user);
      this.commonService.setLogined(true);
    }
    this.commonService.setLoading(false)
  }
}
