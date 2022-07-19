import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loadingService=new BehaviorSubject<boolean>(true);
  public $loading=this.loadingService;

  constructor() { }

  public setLoading(state:boolean){
    this.$loading.next(state);
  }
}
