import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzLayoutModule} from 'ng-zorro-antd/layout'
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
  CommonModule,
    AdminRoutingModule,
    SharedModule,
    NzLayoutModule,
    NzAvatarModule,
  ]
})
export class AdminModule { }
