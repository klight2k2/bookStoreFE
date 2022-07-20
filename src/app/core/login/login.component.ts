import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public  isLogin$=new BehaviorSubject<boolean>(true);
  constructor(private fb: FormBuilder,
    private _route:ActivatedRoute,
    private _router:  Router
    ) { }

  public loginForm=this.fb.group({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
    this._route.queryParams.subscribe(data=>{
      console.log("data neee",data['isRegister'])
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

  public login(){
    console.log("hello")
  }

}
