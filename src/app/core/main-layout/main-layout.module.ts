import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import{SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [
    MainLayoutComponent,
    ListCartComponent,
    CategoryComponent,
    CartComponent
  ],
  exports:[
      MainLayoutComponent
  ]
  ,
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    SharedModule
  ]
})
export class MainLayoutModule { }
