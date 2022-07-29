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
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

const nzZorroModule = [
  NzButtonModule,
  NzMenuModule,
  NzCheckboxModule,
  NzGridModule,
  NzDropDownModule,
  NzInputModule,
  NzIconModule,
  NzTableModule,
  NzBadgeModule,
  NzCardModule,
  NzCarouselModule,
  NzTabsModule,
  NzPaginationModule,
  NzPopoverModule,
  NzSpinModule,
  NzToolTipModule,
  NzNotificationModule
];


const angularModule=[
  FormsModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoadingComponent,
  ],
  imports: [CommonModule,...angularModule, ...nzZorroModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoadingComponent,
    ...nzZorroModule,
    ...angularModule
  ],
})
export class SharedModule {}
