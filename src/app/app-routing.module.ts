import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
  },
  { path: 'home' ,loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: 'list', loadChildren: () => import('./core/list-container/list-container.module').then(m => m.ListContainerModule) },
  {path:"shopping-cart",loadChildren:()=>import("./core/shopping-cart/shopping-cart.module").then((m)=>m.ShoppingCartModule)},
  { path: 'detail', loadChildren: () => import('./core/cart-detail/cart-detail.module').then(m => m.CartDetailModule) },
  { path: 'login', loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
