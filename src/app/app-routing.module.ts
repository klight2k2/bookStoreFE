import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard'
import { AdminGuard } from './shared/adminGuard/admin.guard';

const routes: Routes = [
  {
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
  },
  { path: 'home',component:MainLayoutComponent ,loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: 'list',component:MainLayoutComponent ,loadChildren: () => import('./core/list-container/list-container.module').then(m => m.ListContainerModule) },
  {path:"shopping-cart",component:MainLayoutComponent ,loadChildren:()=>import("./core/shopping-cart/shopping-cart.module").then((m)=>m.ShoppingCartModule)},
  { path: 'detail', component:MainLayoutComponent ,loadChildren: () => import('./core/cart-detail/cart-detail.module').then(m => m.CartDetailModule) },
  { path: 'login' , loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule) },
  { path: 'mainLayout', canActivateChild:[AuthGuard],loadChildren: () => import('./shared/main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'orders', component:MainLayoutComponent , canActivateChild:[AuthGuard],loadChildren: () => import('./core/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'purchase', component:MainLayoutComponent ,loadChildren: () => import('./core/purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'admin', component:MainLayoutComponent , loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule) },
  { path: 'userInfo', component:MainLayoutComponent , loadChildren: () => import('./core/user-info/user-info.module').then(m => m.UserInfoModule) },
  { path: '**', component:MainLayoutComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
