import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categories=["Sách Tôn Giáo - Tâm Linh",  "Light novel","Truyện trinh thám","Truyện kiếm hiệp"

  ];
  public listPublisher=[
    {id:1,name:"Wings Books",check:false},
    {id:2,name:"Nhã Nam", check:false},
    // {id:5,name:"Wings Books"},
    // {id:6,name:"Wings Books"},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public minValue:number=0;
  public maxValue:number=0;
}
