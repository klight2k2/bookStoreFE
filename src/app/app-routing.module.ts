import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
  },
  { path: 'home', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: 'list', loadChildren: () => import('./core/main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  {path:"shopping-cart",loadChildren:()=>import("./core/shopping-cart/shopping-cart.module").then((m)=>m.ShoppingCartModule)},
  { path: 'detail', loadChildren: () => import('./core/cart-detail/cart-detail.module').then(m => m.CartDetailModule) },
  { path: 'login', loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
