import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { RegisterComponent } from './home/register/register.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './home/verify-email/verify-email.component';
//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';



const routes: Routes = [
  { path: '',redirectTo: 'login',  pathMatch: 'full'}, 
  { path: 'login',component:LoginComponent}, 
  { path: 'dashboard',component:DashboardComponent}, 
  { path: 'register',component:RegisterComponent},
  { path: 'forgot-password',component:ForgotPasswordComponent},
  { path: 'verify-email',component:VerifyEmailComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

