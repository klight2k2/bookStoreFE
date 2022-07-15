import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from './header/header.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterComponent } from './footer/footer.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCardModule } from 'ng-zorro-antd/card';
const nzZorroModule=[
  NzButtonModule,
  NzMenuModule,
  NzGridModule,
  NzDropDownModule,
  NzInputModule,
  NzIconModule,
  NzTableModule,
  NzBadgeModule,
  NzPopoverModule,
  NzCardModule,
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ...nzZorroModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ...nzZorroModule,
  ]
})
export class SharedModule { }
