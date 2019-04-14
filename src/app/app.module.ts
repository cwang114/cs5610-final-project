import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteManagementComponent } from './components/route-management/route-management.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { MainComponent } from './components/main/main.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {SharedService} from './service/shared.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteManagementComponent,
    FootbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileAdminComponent,
    ProfileUserComponent,
    MainComponent,
    HeaderbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
