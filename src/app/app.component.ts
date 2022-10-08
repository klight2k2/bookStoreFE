import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { AuthService } from './services/auth/auth.service';
import { NotificationService } from './services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'Go go Japan';
  isAdmin = true;
  loginPage$ = this.commonService.loginPage$;
  constructor(
    private commonService: CommonService,
    private auth: AuthService,
    private notification: NotificationService
  ) { super() }

  override  preInit(): void {
    this.commonService.setLoading(true)
    this.auth.checkLogin();
    this.commonService.setLoading(false)


  }

  override postInit(): void {
    this.commonService.setLoginPage(true)

  }

}
