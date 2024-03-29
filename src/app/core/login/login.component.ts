import { NotificationService } from './../../services/notification/notification.service';
import { AuthService } from './../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { CommonService } from 'src/app/services/common.service';
import { LocalStorageService } from './../../services/localStorage/local-storage.service';
import { differenceInCalendarDays } from 'date-fns';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  radioValue = 'A';
  today = new Date();
  public  isLogin$=new BehaviorSubject<boolean>(true);
  public  isRegister$=new BehaviorSubject<boolean>(true);
  constructor(private fb: FormBuilder,
    private _route:ActivatedRoute,
    private _router:  Router,
    private http:HttpClient,
    private auth:AuthService,
    private localStorageService:LocalStorageService,
    private common:CommonService,
    private notificationService:NotificationService
    ) {super() }

  public loginForm=this.fb.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  })

  public registerForm=this.fb.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    sex:new FormControl('male',[Validators.required]),
    fullname:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    phone_number:new FormControl('',[Validators.required,Validators.pattern(new RegExp("[0-9 ]{10}"))]),
    address:new FormControl('',[Validators.required]),
  })

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;


  override preInit(): void {
    const checkLogined=this.common.logined$.getValue();
    if(checkLogined) this._router.navigate(['/home'])
    this._route.queryParams.subscribe(data=>{
      this.isLogin$.next(!data['isRegister']);
      this.isRegister$.next(data['isRegister']);
    })
    // this.ChangeDetectionStrategy.OnPush(this.isLogin$)
    // this.isLogin$=!this._route.snapshot.queryParamMap.get('isRegister')
  }

  public toggleLogin(){
   this._router.navigate(['/login'],{queryParams:{isRegister:false}})
  }
  public toggleRegister(){
    this._router.navigate(['/login'])

  }
  public navigate(navigateAddress:string){
    this._router.navigate(['/home'])
  }
  public login(){
    this.subscribeOnce<any>(
    this.auth.login(this.loginForm.value),
      (res:any)=>{
        this.common.notifySuccess(res);
        if(res.code=200){
          // console.log(res);
          this.common.setUser(res.user);

          this.localStorageService.setToken(res.token);
          this.localStorageService.set('user',res.user);
          this.common.setLogined(true)
          this._router.navigate(['/home'])

        }
      }
    )
  }
  public register(){
    console.log(this.registerForm.value);

    this.subscribeOnce<any>(
    this.auth.register(this.registerForm.value),
      (res:any)=>{
        if(res?.code==200) this.notificationService.success(res?.message);
        this._router.navigate(['/login'])
      }
    )
  }
}
