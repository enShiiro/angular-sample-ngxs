import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';

const route : Routes =[
  // {
  //   path : 'home',
  //   component : HomeComponent,
  //   canActivate:[AuthGuard]
  // },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'login',
    component : LoginPageComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch:'full'
  
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class AppRoutingModule { }
