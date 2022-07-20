import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  public loading$=this.commonService.loading$;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

}
