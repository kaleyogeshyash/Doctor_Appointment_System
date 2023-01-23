import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { RegisterComponent } from './home/register/register.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './home/login/login.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './home/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
