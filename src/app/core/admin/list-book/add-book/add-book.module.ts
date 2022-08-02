import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookComponent } from './add-book.component';
import { SharedModule } from './../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBookComponent
  ],
  imports: [
CommonModule,
    AddBookRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AddBookModule { }
