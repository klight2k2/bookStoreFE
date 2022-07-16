import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogined:boolean = true;
  public countCart=5;
  constructor(
    private _router:Router
  ) { }
  public categories=["Art & Music","Biographies","Business",
  "Comic","Computers & Tech","Cooking","Edu & Refference","Entertainment"]

  ngOnInit(): void {
  }

  navigateShoppingCart(){
    this._router.navigate(['/shopping-cart']);
  }
}
