import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartDetailRoutingModule } from './cart-detail-routing.module';
import { CartDetailComponent } from './cart-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CartDetailComponent
  ],
  imports: [
  CommonModule,
    CartDetailRoutingModule,
    SharedModule,
  ]
})
export class CartDetailModule { }
