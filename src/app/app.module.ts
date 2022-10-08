import { NzModalModule } from 'ng-zorro-antd/modal';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BaseComponent } from './core/base/base/base.component';
import { ShoppingCartModule } from './core/shopping-cart/shopping-cart.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import {
  DropDownListAllModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';

import {
  MaskedTextBoxModule,
  UploaderAllModule,
} from '@syncfusion/ej2-angular-inputs';

import {
  ToolbarAllModule,
  ContextMenuAllModule,
} from '@syncfusion/ej2-angular-navigations';

import {
  ButtonAllModule,
  CheckBoxAllModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';

import {
  DatePickerAllModule,
  TimePickerAllModule,
  DateTimePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';

import {
  NumericTextBoxAllModule,
  TextBoxAllModule,
} from '@syncfusion/ej2-angular-inputs';

import {
  ScheduleAllModule,
  RecurrenceEditorAllModule,
  ScheduleModule, RecurrenceEditorModule,
} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from './schedule/schedule.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, BaseComponent, ScheduleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ShoppingCartModule,
    ScheduleModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    TextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    DropDownButtonAllModule,
    SwitchAllModule,
    BrowserModule,
    ToastAllModule,
    RecurrenceEditorModule,
    NzModalModule
  ],
  providers: [
    ...authInterceptorProviders,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
