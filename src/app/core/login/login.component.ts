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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public  isLogin$=new BehaviorSubject<boolean>(true);
  constructor(private fb: FormBuilder,
    private _route:ActivatedRoute,
    private _router:  Router,
    private http:HttpClient,
    private auth:AuthService,
    private localStorageService:LocalStorageService,
    private common:CommonService
    ) {super() }

  public loginForm=this.fb.group({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

  override preInit(): void {
    this._route.queryParams.subscribe(data=>{
      this.isLogin$.next(!data['isRegister']);
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
    console.log("hello")
    this.subcribeOnce<any>(
    this.auth.login(this.loginForm.value),
      (res:any)=>{
        console.log(res)
        this.common.setUser(res.user);
        this.localStorageService.setToken(res.token);
        this.localStorageService.set('user',res.user);
        this.common.setLogined(true)
        this._router.navigate(['/home'])
      }
    )
  }

}
