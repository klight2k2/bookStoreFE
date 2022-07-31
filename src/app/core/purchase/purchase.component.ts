import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base/base.component';
import { UserService } from './../../services/user/user.service';
import { NotificationService } from './../../services/notification/notification.service';
import { CommonService } from 'src/app/services/common.service';
const statusOrder=[
  'Đặt hàng thành công',
  'Đang giao',
  'Đã giao thành công',
  'Đã hủy'
]
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent extends BaseComponent implements OnInit {
  public orders:any;

  constructor(
    private userService:UserService,
    private notificationService:NotificationService,
    private commonService:CommonService
  ) {

    super()
  }
  override preInit(){
    this.subscribeOnce(this.userService.getPurchase(),(data:any)=>{
        this.orders=data;
    })
  }

  getStatus(status:string){

    return statusOrder.indexOf(status);
  }
  getOrderId( order_id:string){
    return `Mã đơn hàng: ${order_id}`;
  }
  showCancelBtn(status:string){
    console.log(status);

    console.log(statusOrder.indexOf(status));
    return statusOrder.indexOf(status)!=3;
  }
  cancelOrder(order_id:number){
    this.commonService.setLoading(true);
    this.subscribeOnce(this.userService.cancelOrder(order_id),(res:any)=>{
      if(res?.code==200) this.notificationService.success(res?.message);
      this.subscribeOnce(this.userService.getPurchase(),(data:any)=>{
        this.orders=data;
    })

    })
    setTimeout(()=>{
      this.commonService.setLoading(false);

    },500)
  }
}
