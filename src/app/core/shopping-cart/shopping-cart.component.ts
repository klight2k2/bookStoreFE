import { BaseComponent } from './../base/base/base.component';
import { ShoppingCartService } from './../../services/shoppingCart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { NotificationService } from './../../services/notification/notification.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent extends BaseComponent implements OnInit {
  public dataSet:any;
  public checkAll=false;
  constructor( private shoppingCart:ShoppingCartService,
            private commonService:CommonService,
            private notification:NotificationService,
    private _router:  Router,
    ) {
    super()
   }
  public override postInit ():void{
    this.shoppingCart.getCart()
    this.subscribeUntilDestroy<any>(this.shoppingCart.shoppingCartData,(data:any)=>{
      this.dataSet=data.map((item:any) =>{return {...item,check:false}});
    })
   }


    public changeCountBook(event:any,index:any){
      this.dataSet[index].num=event.target.value;
     this.shoppingCart.shoppingCartData.next(this.dataSet)
     this.shoppingCart.updateCart();
    }

    public deleteBook(index:number){
      this.shoppingCart.shoppingCartData.next(this.dataSet.filter((item:any,id:number)=>id!==index))
     this.shoppingCart.updateCart();
    }

  public changeCheckAll(){
    if (this.checkAll) {
      this.dataSet = this.dataSet.map((item:any) => ({
        ...item,
        check: true
      }));
    } else {
      this.dataSet = this.dataSet.map((item:any) => ({
        ...item,
        check: false
      }));
    }

  }
  public changeCheck(){
    if(this.dataSet.every((item:any)=>item.check==true)){
      this.checkAll=true;
    }else this.checkAll=false;
  }

  public order(){
    const orders=this.dataSet.filter((item:any)=>item.check)
    // console.log(orders);
    this.subscribeUntilDestroy(
      this.commonService.logined$,(status:boolean)=>{
        if(status ){
          if( orders?.length >0){
            this.commonService.setOrders(orders);
            this._router.navigate(['/orders']);
          }
          else{

            this.notification.info("Hãy chọn các quyển sách bạn muốn đặt!")
          }

        }else{
          this.notification.info("Please login to order!")
        }
    }
    )


  }
}
