import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal'
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { AdminService } from './../../../services/admin/admin.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {
  public dataSet:any;
  constructor(private adminService:AdminService,
    private commonService:CommonService,
    private modal: NzModalService,
    private _router:Router ) {
    super();
  }

  override  preInit(): void {
      this.subscribeOnce(this.adminService.getUsers(),(data:any)=>{
        console.log(data);
        this.dataSet=data;
      })
  }

  createModal(user_id:number): void {

    this.modal.create({
      nzTitle: 'Xóa user',
      nzContent: 'Bạn có chắc muốn xóa người dùng',
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'dfasfda'
      },
      nzOnOk:()=>this.deleteUser(user_id)
    });
  }
  deleteUser(user_id:number){
    this.subscribeOnce(this.adminService.deleteUser(user_id),(res:any)=>{
      this.commonService.notifySuccess(res)
      this.subscribeOnce(this.adminService.getUsers(),(data:any)=>{
        console.log(data);
        this.dataSet=data;
      })
    })
  }
  navigateToDetail(user:any){
  this.adminService.setUserDetail(user);
      this._router.navigate(['/admin/user/userDetail']);
  }
  navigate(address:string){
      this._router.navigate([address]);
  }

}
