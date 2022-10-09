import { ShoppingCartService } from 'src/app/services/shoppingCart/shopping-cart.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from './../../services/auth/auth.service';
import { BookService } from './../../services/book/book.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public isLogined$ = this.commonService.logined$;
  public user: any;

  constructor(
    private _router: Router,
    private commonService: CommonService,
    private auth: AuthService,
  ) { super() }
  public categories: any;

  override preInit() {
    this.subscribeUntilDestroy(this.commonService.user$, (data: any) => {
      this.user = data;
      if (!data) {
        this.navigate('login')
      }
    })
  }
  override postInit() {


  }

  navigate(navigateAdress: string, isLoginPage = false, isRegister = false) {
    // console.log(this._router.url);

    if (isLoginPage) {
      this.commonService.setLoginPage(false);
    }
    if (isRegister) {
      this._router.navigate(['/' + navigateAdress], { queryParams: { isRegister: true } });

    } else {

      this._router.navigate(['/' + navigateAdress]);
    }
  }
  logOut() {
    this.commonService.setLoading(true)
    this.auth.signOut();
    this.navigate('login');
    this.commonService.setLoading(false)
  }



}



