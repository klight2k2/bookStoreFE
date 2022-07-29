import { CommonService } from 'src/app/services/common.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent extends BaseComponent implements OnInit {
  public dataSet:any;
  public num: number=1;
  constructor(private commonService:CommonService,
    private shoppingCartService:ShoppingCartService) {super() }

  override preInit(){
    this.subscribeUntilDestroy(this.commonService.cartDetail$,(data:any)=>{
      this.dataSet=data;
    })
  }

  public getLink(link:string):string{
    return `assets/${link}`
  }
  public handleAddCart(cart:any){
    const {title,description,files}=cart;
      this.shoppingCartService.addCart({title:title,description:description,files:this.getLink(files),count:this.num});
    }

  public decreaseNum():void{
    if(this.num>1) this.num=this.num-1;
  }
  public increaseNum():void{
    this.num=this.num+1;
  }
}
