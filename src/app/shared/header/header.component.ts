import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public isLogined:boolean = true;
  public countCart=5;
  constructor(
    private _router:Router,
    private shoppingCartService:ShoppingCartService
  ) { super()}
  public categories=["Art & Music","Biographies","Business",
  "Comic","Computers & Tech","Cooking","Edu & Refference","Entertainment"]

  override postInit(){
    this.subscribeUntilDestroy<any>(this.shoppingCartService.shoppingCartData,(data:any)=>{
      this.countCart=data.length | 0;
    })
  }

  navigateToList(){
    this._router.navigate(['/list']);

  }

  navigateShoppingCart(){
    this._router.navigate(['/shopping-cart']);
  }

  navigateToHome(){
    this._router.navigate(['/home']);

  }
}
