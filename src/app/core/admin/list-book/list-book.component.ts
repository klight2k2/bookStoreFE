import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { AdminService } from './../../../services/admin/admin.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent extends BaseComponent implements OnInit {

  public dataSet:any;

  constructor(
    private adminService:AdminService,
    private commonService:CommonService,
    private _router:Router,
    private modal: NzModalService,
  ) {
    super();
   }
  override preInit(){
    this.subscribeUntilDestroy(this.adminService.getAll(),(data:any)=>{
      this.dataSet=data;
  console.log(data);

      this.commonService.setLoading(false)
    })
  }

  createModal(book_id:number): void {

    this.modal.create({
      nzTitle: 'Xóa sách',
      nzContent: 'Bạn có chắc muốn xóa tất cả thông tin về quyển sách này?',
      nzMaskClosable: false,
      nzClosable: false,

      nzOnOk:()=>this.deleteBook(book_id)
    });
  }
  deleteBook(book_id:number){
    this.subscribeOnce(this.adminService.deleteBook(book_id),(res:any)=>{
      this.commonService.notifySuccess(res)
      this.subscribeOnce(this.adminService.getAll(),(data:any)=>{
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
