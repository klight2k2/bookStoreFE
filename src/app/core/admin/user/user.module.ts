import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from 'src/app/shared/shared.module'


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
  CommonModule,
    UserRoutingModule,
    NzTableModule,
    NzModalModule,
    SharedModule

  ]
})
export class UserModule { }
