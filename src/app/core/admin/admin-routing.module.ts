import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path:'login',component:LoginComponent
},
{
  path:'',
  redirectTo:'/admin/user',
  pathMatch:'full'
  },
  { path: 'user' , component: AdminComponent,loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'user/userDetail', component: AdminComponent, loadChildren: () => import('./user/user-detail/user-detail.module').then(m => m.UserDetailModule) },
  { path: 'user/addUser',component: AdminComponent, loadChildren: () => import('./user/add-user/add-user.module').then(m => m.AddUserModule) },
  { path: 'listBook',component: AdminComponent, loadChildren: () => import('./list-book/list-book.module').then(m => m.ListBookModule) },
  { path: 'addBook',component: AdminComponent, loadChildren: () => import('./list-book/add-book/add-book.module').then(m => m.AddBookModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
