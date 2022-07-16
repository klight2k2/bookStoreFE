import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categories=["Sách Tôn Giáo - Tâm Linh",  "Light novel","Truyện trinh thám","Truyện kiếm hiệp"

  ]
  constructor() { }

  ngOnInit(): void {
  }

  public isChecked:any;
  public isCheckedName:any;
  public checkboxData = [1,2,3,4,5,6,7,8];
  onChange(e:any){
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
  }

}
