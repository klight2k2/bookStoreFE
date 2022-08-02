import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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
  constructor( private _router:Router) { }

  ngOnInit(): void {
  }

  navigate(address:string){
    this._router.navigate([address]);
  }

}
