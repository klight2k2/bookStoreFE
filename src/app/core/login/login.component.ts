import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public  isLogin:boolean=true;
  constructor(private fb: FormBuilder) { }

  public loginForm=this.fb.group({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
  }

  public toggleLogin(){
    this.isLogin=!this.isLogin;
  }

  public login(){
    console.log("hello")
  }

}
