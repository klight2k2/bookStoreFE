import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public  isLogin$=new BehaviorSubject<boolean>(true);
  constructor(private fb: FormBuilder,
    private _route:ActivatedRoute,
    private authService:AuthService,
    private _router:  Router,
    private http:HttpClient
    ) { }

  public loginForm=this.fb.group({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
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
  this.authService.login(this.loginForm.value)
  }

}
