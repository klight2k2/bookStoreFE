import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loading$=new BehaviorSubject<boolean>(false);
  public loginPage$=new BehaviorSubject<boolean>(false);
  public cartDetail$=new BehaviorSubject<any>('');
  public logined$=new BehaviorSubject<boolean>(false);
  public user$=new BehaviorSubject<any>('');

  constructor(
  ) { }

  public setLoading(state:boolean){
    this.loading$.next(state);
  }
  public setLoginPage(state:boolean){
    this.loginPage$.next(state);
  }
  public setCartDetail(data:any){
    this.cartDetail$.next(data);
  }

  public setLogined(state:boolean){
      this.logined$.next(state);
  }
  public setUser(data:any){
      this.user$.next(data);
  }
}
