import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base/base.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent extends BaseComponent implements OnInit {
  public listCart:any;
  constructor(private commonService:CommonService) {
    super()
   }

   override preInit(): void {
       this.subscribeUntilDestroy(this.commonService.listCart$,(listCart:any)=>{
        this.listCart=listCart;
        setTimeout(()=>{
          this.commonService.setLoading(false)

        },200)
       })
   }

}
