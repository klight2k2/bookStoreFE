import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { Injectable } from '@angular/core';

interface shoppingCart{
  id:number,

}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCartData=new BehaviorSubject<any>([]);
  constructor(
    private localStorageService:LocalStorageService,
  ) { }

  public addCart(cart:any){
    const currentCart=this.shoppingCartData.getValue()
     this.shoppingCartData.next([...currentCart,cart]);
     this.localStorageService.set('shopping_cart',this.shoppingCartData.getValue());
  }

  public getCart(){

    this.shoppingCartData.next(this.localStorageService.get('shopping_cart'));

  }
}
