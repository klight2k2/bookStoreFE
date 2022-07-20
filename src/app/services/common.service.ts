import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loading$=new BehaviorSubject<boolean>(false);
  public loginPage$=new BehaviorSubject<boolean>(false);

  constructor() { }

  public setLoading(state:boolean){
    this.loading$.next(state);
  }
  public setLoginPage(state:boolean){
    this.loginPage$.next(state);
  }
}
