import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './../localStorage/local-storage.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCartData=new BehaviorSubject<any>([]);
  public shoppingCartCount=new BehaviorSubject<number>(0);
  constructor(
    private localStorageService:LocalStorageService,
  ) { }

  public addCart(cart:any){

    const currentCarts=this.shoppingCartData.getValue() || null;
    if(currentCarts &&   currentCarts.length>0){
      let checkExist=false;
      currentCarts.map((currentCart:any)=>{
            if( currentCart.id  === cart.id){
              currentCart.num=currentCart.num+cart.num;
              checkExist=true;
            }
      })
      if(!checkExist) this.shoppingCartData.next([...currentCarts,cart]);
      else this.shoppingCartData.next([...currentCarts]);
      console.log(cart);
    }else{

      this.shoppingCartData.next([cart]);
    }
     this.localStorageService.set('shopping_cart',this.shoppingCartData.getValue());

  }
  public getCountCart(){
    this.getCart();
    let count=0;
    const currentCart=this.shoppingCartData.getValue() || null;
    if(!!currentCart){
      count=currentCart?.length;
    }
   this.shoppingCartCount.next(count);
  }
  public getCart(){

    this.shoppingCartData.next(this.localStorageService.get('shopping_cart'));

  }

  public updateCart(){
    this.localStorageService.set('shopping_cart',this.shoppingCartData.getValue());

  }

  public setCart(data:any){
   this.shoppingCartData.next(data)
    this.localStorageService.set('shopping_cart',this.shoppingCartData.getValue());

  }
}
