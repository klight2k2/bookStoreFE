import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
  CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
