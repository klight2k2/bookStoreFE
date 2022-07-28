import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'bookStoreFE';
  isAdmin=true;
  loginPage$=this.commonService.loginPage$;
  constructor(
    private commonService:CommonService,
    private auth:AuthService
  ){super()}

  override  preInit(): void {
    this.commonService.setLoading(true)


  }
  override postInit(): void {
      this.commonService.setLoading(false)
    this.commonService.setLoginPage(true)

  }

  public enterLogin(){
    this.auth.login('hê')
  }
}
