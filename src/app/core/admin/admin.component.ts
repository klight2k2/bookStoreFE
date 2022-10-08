import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { BaseComponent } from '../base/base/base.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BaseComponent implements OnInit {
  public changeStatusId!:number;
  public status="";
  public dataSet:any;

    public  isVisible = false;
    isConfirmLoading = false;
  constructor(
    private adminService:AdminService,
    private commonService:CommonService,
    private _router:Router,
    private modal: NzModalService,
    private auth:AuthService,

  ) {
    super();
   }
  override async preInit(){
    this.subscribeUntilDestroy(
      this.adminService.getUsers(),
      (data:any)=>{
        this.dataSet=data;
        
      }
    )
  }
  convertRole(roleId:number):string{
    let role="";
    switch(roleId){
      case 1:
          role="admin";
          break;
      case 2:
          role="teacher";
          break;
      case 3:
          role="student";
          break;
      
    }
    return role;
  }

  createModal(userId:number): void {

    this.modal.create({
      nzTitle: 'Thay đổi trạng thái',
      nzContent: `Bạn có chắc muốn xóa tất cả thông tin về quyển sách này?
      <button>Hello</button>
      `,
      nzMaskClosable: false,
      nzClosable: false,

      // nzOnOk:()=>this.deleteBook(book_id)
    });
  }

  navigateToDetail(user:any){
  this.adminService.setUserDetail(user);
      this._router.navigate(['/admin/user/userDetail']);
  }
  navigate(address:string){
      this._router.navigate([address]);
  }
  showModal(data:any): void {
    this.changeStatusId=data.id;
    this.status=data.status;

    this.isVisible = true;
  }

  handleOk(): void {
  this.commonService.setLoading(true);    
    this.isConfirmLoading = true;
    this.isVisible=false;
    this.subscribeUntilDestroy(this.adminService.updateStatus({id:this.changeStatusId,status:this.status})
    ,(res:any)=>{
      this.subscribeUntilDestroy(
        this.adminService.getUsers(),
        (data:any)=>{
          this.dataSet=data;
          this.commonService.setLoading(false);
        }
      )
      this.commonService.notifySuccess(res);
      console.log(res);
      
    }
    )
  }

  handleCancel(): void {
    this.isVisible = false;
  }


  logOut(){
    this.commonService.setLoading(true)
    this.auth.signOut();
      this.navigate('home');
      this.commonService.setLoading(false)
  }

}
