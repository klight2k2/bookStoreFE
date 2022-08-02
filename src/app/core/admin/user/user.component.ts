import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { AdminService } from './../../../services/admin/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {
  public dataSet:any;
  constructor(private adminService:AdminService) {
    super();
  }

  override  preInit(): void {
      this.subscribeOnce(this.adminService.getUsers(),(data:any)=>{
        console.log(data);
        this.dataSet=data;
      })
  }


}
