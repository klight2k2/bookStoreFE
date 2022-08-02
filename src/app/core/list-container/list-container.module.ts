import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ListContainerRoutingModule } from './list-container-routing.module';
import { ListContainerComponent } from './list-container.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CategoryComponent } from './category/category.component';
import{SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [
    ListContainerComponent,
    ListCartComponent,
    CategoryComponent,
  ],
  exports:[
    ListContainerComponent
  ]
  ,
  imports: [
    CommonModule,
    ListContainerRoutingModule,
    SharedModule,
    NzPaginationModule
  ]
})
export class ListContainerModule { }
