import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    NzTableModule,
    NzModalModule,
    SharedModule,
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
