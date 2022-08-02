import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { SharedModule } from './../../../../shared/shared.module';


@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
  CommonModule,
    UserDetailRoutingModule,
    NzDatePickerModule,
    SharedModule
  ]
})
export class UserDetailModule { }
