import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base/base.component';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent extends BaseComponent implements OnInit {
  public dataSet:any;

  constructor() {
    super();
   }



}
