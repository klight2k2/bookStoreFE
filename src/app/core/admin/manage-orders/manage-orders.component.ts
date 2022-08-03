import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { AdminService } from './../../../services/admin/admin.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
const statusOrder=[
  'Đặt hàng thành công',
  'Đang giao',
  'Đã giao thành công',
  'Đã hủy'
]

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent extends BaseComponent implements OnInit {
  public selectedState=1;
  public orders:any;
  public dataSet:any;
  public orderStates=[
    {
      label: 'Đặt hàng thành công',
      value:1
    },
    {
      label: 'Đang giao',
      value:2
    },
    {
      label:  'Đã giao thành công',
      value:3
    },
  ]

  constructor(
    private adminService:AdminService,
    private commonService:CommonService,
    private _router:Router,
    private modal: NzModalService,
  ) {
    super();
   }
  override preInit(){
    this.commonService.setLoading(false)
    this.subscribeOnce(this.adminService.getOrders(),(data:any)=>{
      // console.log(data);


      this.orders=data;
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
        // console.log(data);
        this.dataSet=data;
      })
    })
  }

  navigate(address:string){
      this._router.navigate([address]);
  }

  getStatus(status:string){

    return statusOrder.indexOf(status);
  }
  getOrderId( order_id:string){
    return `Mã đơn hàng: ${order_id}`;
  }
  showCancelBtn(status:string){
    // console.log(status);

    // console.log(statusOrder.indexOf(status));
    return statusOrder.indexOf(status)==0 ||statusOrder.indexOf(status)==1  ;
  }
  cancelOrder(order_id:number){
    this.commonService.setLoading(true);
    this.subscribeOnce(this.adminService.cancelOrder(order_id),(res:any)=>{
      this.commonService.notifySuccess(res);
      this.subscribeOnce(this.adminService.getOrders(),(data:any)=>{
        this.orders=data;
    })

    })
    setTimeout(()=>{
      this.commonService.setLoading(false);

    },500)
  }
  updateStatus(order_id:number){
    this.commonService.setLoading(true);
    // console.log({order_id:order_id,status:this.selectedState});

    this.subscribeOnce(this.adminService.updateStatus({order_id:order_id,status:this.selectedState}),(res:any)=>{
      this.commonService.notifySuccess(res);
      this.subscribeOnce(this.adminService.getOrders(),(data:any)=>{
        this.orders=data;
    })

    })
    setTimeout(()=>{
      this.commonService.setLoading(false);

    },500)

  }
}
