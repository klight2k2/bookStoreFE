import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookComponent } from './add-book.component';
import { SharedModule } from './../../../../shared/shared.module';


@NgModule({
  declarations: [
    AddBookComponent
  ],
  imports: [
  CommonModule,
    AddBookRoutingModule,
    SharedModule
  ]
})
export class AddBookModule { }
