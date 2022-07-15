import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ListCartComponent,
    CartComponent
  ],
  exports:[
    ShoppingCartComponent,
    ListCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
