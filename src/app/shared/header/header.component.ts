import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogined:boolean = true;
  public countCart=5;
  constructor() { }
  public categories=["Art & Music","Biographies","Business",
  "Comic","Computers & Tech","Cooking","Edu & Refference","Entertainment"]

  ngOnInit(): void {
  }

}
