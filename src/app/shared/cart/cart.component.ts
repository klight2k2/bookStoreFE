import { CommonService } from 'src/app/services/common.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends BaseComponent implements OnInit {
  @Input() data:any;
  constructor(
    private shoppingCartService:ShoppingCartService,
    private commonService:CommonService,
    private _router:Router,

  ) { super()}

  handleAddCart(cart:any){
    cart.num=1;
    this.shoppingCartService.addCart(cart);
  }

  navigateToDetail(data:any){
    this.commonService.setCartDetail(data);
    this._router.navigate(['/detail']);

  }
}
