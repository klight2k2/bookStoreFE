import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CommonService } from './../../services/common.service';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 isCollapsed=false;


 public toggleCollapsed(){
  this.isCollapsed=!this.isCollapsed;

 }
  constructor( private _router:Router,
    private auth:AuthService,
    private commonService:CommonService) { }

  ngOnInit(): void {
  }

  navigate(address:string){
    this.commonService.setLoading(true)
    this._router.navigate([address]);
  }

  logOut(){
    this.commonService.setLoading(true)
    this.auth.signOut();
      this.navigate('home');
      this.commonService.setLoading(false)
  }
}
