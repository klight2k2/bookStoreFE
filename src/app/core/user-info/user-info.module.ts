import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    SharedModule
  ]
})
export class UserInfoModule { }
