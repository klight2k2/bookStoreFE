import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NotificationService } from './notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loading$=new BehaviorSubject<boolean>(false);
  public loginPage$=new BehaviorSubject<boolean>(false);
  public cartDetail$=new BehaviorSubject<any>('');
  public logined$=new BehaviorSubject<boolean>(false);
  public listCart$=new BehaviorSubject<any>('');
  public orders$=new BehaviorSubject<any>('');
  public user$=new BehaviorSubject<any>('');

  constructor(
    protected notificationService:NotificationService
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
  public setListCart(data:any){
      this.listCart$.next(data);
  }
  public setOrders(data:any){
      this.orders$.next(data);
  }
  public setUser(data:any){
      this.user$.next(data);
  }
}
