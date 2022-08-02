import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service'
import { NotificationService } from 'src/app/services/notification/notification.service'
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service'
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends BaseComponent implements OnInit {
  public orders:any;
  public total=0;
  public orderForm=this.fb.group({

    phone_number:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    note:new FormControl('',[Validators.required]),
  })
  constructor( private shoppingCart:ShoppingCartService,
    private commonService:CommonService,
    private userService:UserService,
    private notification:NotificationService,
    private _router:  Router,
    private fb:FormBuilder
) {
super()
}
  override preInit(){
    this.subscribeOnce(this.commonService.orders$, (orders:any)=>{
      this.orders=orders;
      orders?.map((order:any)=>{
        this.total+=order.price*order.num;
      })
    })
  }

  order(){
    const data={...this.orderForm.value,orders:this.orders};
    const ordersId=this.orders.map((order:any)=>{
      return order.id
    })
    console.log(ordersId);

    this.subscribeOnce(this.userService.orders(data),(res:any)=>{
      if(res.code==200){
        console.log(res);
        let carts=this.shoppingCart.shoppingCartData.getValue();
        carts=carts.filter((cart:any)=> !ordersId.includes(cart.id))
        this.shoppingCart.setCart(carts);
        this.commonService.notifySuccess(res);
        this._router.navigate(['/home'])
      }

    })

  }
  }
