import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageOrdersRoutingModule } from './manage-orders-routing.module';
import { ManageOrdersComponent } from './manage-orders.component';
import { SharedModule } from 'src/app/shared/shared.module'
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty'

@NgModule({
  declarations: [
    ManageOrdersComponent
  ],
  imports: [
  CommonModule,
    ManageOrdersRoutingModule,
    SharedModule,
    NzModalModule,
    NzStepsModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzEmptyModule,
  ]
})
export class ManageOrdersModule { }
