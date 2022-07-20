import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public isLogined:boolean = false;
  public countCart=0;
  constructor(
    private _router:Router,
    private shoppingCartService:ShoppingCartService,
    private commonService:CommonService,
  ) { super()}
  public categories=["Art & Music","Biographies","Business",
  "Comic","Computers & Tech","Cooking","Edu & Refference","Entertainment"]

  override preInit(){
  }
  override postInit(){
    this.shoppingCartService.getCountCart()
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
  navigate(navigateAdress:string,isLoginPage=false,isRegister=false){
    if(isLoginPage) {
      this.commonService.setLoginPage(false);
      // console.log("hhhh",this.commonService.loginPage$.getValue())
    }
    if(isRegister){
      this._router.navigate(['/'+navigateAdress],{queryParams:{isRegister:true}});

    }else{

      this._router.navigate(['/'+navigateAdress]);
    }
  }
}
