import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ListCartComponent } from './list-cart/list-cart.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ListCartComponent
  ],
  exports:[
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
