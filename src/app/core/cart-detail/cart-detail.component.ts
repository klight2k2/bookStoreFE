import { CommonService } from 'src/app/services/common.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { BookService } from 'src/app/services/book/book.service'

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent extends BaseComponent implements OnInit {
  public dataSet:any;
  public cart:any;
  public num: number=1;
  constructor(private commonService:CommonService,
    private shoppingCartService:ShoppingCartService,
    private bookService:BookService
    ) {super() }

  override preInit(){
    this.subscribeUntilDestroy(this.commonService.cartDetail$,(data:any)=>{
      this.dataSet=data;
    })
    this.subscribeOnce(this.bookService.getDetailBook(this.dataSet.id),(data:any)=>{
      this.dataSet=data;
      // console.log(data);

    })
  }



  public handleAddCart(cart:any){
      cart.num=this.num;
      this.shoppingCartService.addCart(cart);
    }

  public decreaseNum():void{
    if(this.num>1) this.num=this.num-1;
  }
  public increaseNum():void{
    this.num=this.num+1;
  }
}
