import { BaseComponent } from './../base/base/base.component';
import { ShoppingCartService } from './../../services/shoppingCart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent extends BaseComponent implements OnInit {
  public dataSet:any;
  constructor( private shoppingCart:ShoppingCartService) {
    super()
   }
  public override postInit ():void{
    this.shoppingCart.getCart()
    this.subscribeUntilDestroy<any>(this.shoppingCart.shoppingCartData,(data:any)=>{
      this.dataSet=data;
      // console.log(data)
    })
   }

    public changeCountBook(event:any,index:any){
      this.dataSet[index].count=event.target.value;
      console.log(  this.dataSet[index].count )
     this.shoppingCart.shoppingCartData.next(this.dataSet)
     this.shoppingCart.updateCart();
    }

    public deleteBook(index:number){
      this.shoppingCart.shoppingCartData.next(this.dataSet.filter((item:any,id:number)=>id!==index))
     this.shoppingCart.updateCart();
    }


}
