import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
const routes: Routes = [
  {path:"shopping-cart",loadChildren:()=>import("./core/shopping-cart/shopping-cart.module").then((m)=>m.ShoppingCartModule)},
  { path: 'list', loadChildren: () => import('./core/main-layout/main-layout.module').then(m => m.MainLayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
