import { BaseComponent } from 'src/app/core/base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CommonService } from './../../services/common.service';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BaseComponent implements OnInit {
 isCollapsed=false;
  public user:any;

 public toggleCollapsed(){
  this.isCollapsed=!this.isCollapsed;

 }
  constructor( private _router:Router,
    private auth:AuthService,
    private commonService:CommonService) {
      super()
     }

    override  preInit(): void {
      this.subscribeOnce(
        this.commonService.user$,(user:any)=>{
          console.log(user);

          this.user=user
        }
        )
    }

  navigate(address:string){
    this.commonService.setLoading(true)
    this._router.navigate([address]);
    setTimeout(()=>{
      this.commonService.setLoading(false)
    },10000)
  }

  logOut(){
    this.commonService.setLoading(true)
    this.auth.signOut();
      this.navigate('home');
      this.commonService.setLoading(false)
  }
}
