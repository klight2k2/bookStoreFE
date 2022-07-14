import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCartData=new BehaviorSubject<string>('');
  constructor(
    private localStorageService:LocalStorageService,
  ) { }


}
