import { AuthLazyGuard } from './shared/auth/auth-lazy.guard';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/adminGuard/admin.guard';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/schedule',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule) },
  { path: 'mainLayout', canLoad: [AuthLazyGuard], loadChildren: () => import('./shared/main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'admin', canLoad: [AuthLazyGuard], component: MainLayoutComponent, loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule) },
  { path: 'userInfo', canLoad: [AuthLazyGuard], component: MainLayoutComponent, loadChildren: () => import('./core/user-info/user-info.module').then(m => m.UserInfoModule) },
  { path: 'booking', canLoad: [AuthLazyGuard], component: MainLayoutComponent, loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },

  { path: 'schedule', canLoad: [AuthLazyGuard], component: ScheduleComponent },
  // { path: '**', component: MainLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
