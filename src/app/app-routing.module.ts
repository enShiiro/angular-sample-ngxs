import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

// const route : Routes =[
  // {
  //   path : 'home',
  //   component : HomeComponent,
  //   canActivate:[AuthGuard]
  // },

//   {
//     path : '',
//     redirectTo : 'home',
//     pathMatch:'full'
  
//   },
// ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot()
  ]
})
export class AppRoutingModule { }
