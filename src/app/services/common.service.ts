import { NotificationService } from './notification/notification.service';
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
  public listCart$=new BehaviorSubject<any>('');
  public orders$=new BehaviorSubject<any>('');
  public user$=new BehaviorSubject<any>('');

  constructor(
    private notificationService:NotificationService
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

  public notifySuccess(data:any){
    if(data?.code==200) this.notificationService.success(data?.message);
    else this.notificationService.error(data?.message)
  }
}
