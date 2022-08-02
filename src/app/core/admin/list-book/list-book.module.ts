import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBookRoutingModule } from './list-book-routing.module';
import { ListBookComponent } from './list-book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzModalModule } from 'ng-zorro-antd/modal'


@NgModule({
  declarations: [
    ListBookComponent
  ],
  imports: [
  CommonModule,
    ListBookRoutingModule,
    SharedModule,
    NzModalModule

  ]
})
export class ListBookModule { }
