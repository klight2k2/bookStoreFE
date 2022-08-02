import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  constructor(
    private commonService:CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.setLoading(true)
  }

}
