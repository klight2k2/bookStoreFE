import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ListCartComponent } from './main-layout/list-cart/list-cart.component';
import { CartComponent } from './main-layout/cart/cart.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CategoryComponent } from './main-layout/category/category.component';



@NgModule({

  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CoreModule { }
