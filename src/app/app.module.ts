import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { MainComponent } from './components/main/main.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import {AuthGuardService} from './service/auth-guard.service';
import {AuthenticationService} from './service/authentication.service';
import { AdminSidebarComponent } from './components/profile-admin/admin-sidebar/admin-sidebar.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AirportManagementComponent } from './components/airport-management/airport-management.component';
import { FlightManagementComponent } from './components/flight-management/flight-management.component';
import { AdminTopbarComponent } from './components/profile-admin/admin-topbar/admin-topbar.component';
import {DataTablesModule} from 'angular-datatables';
import { AirportNewComponent } from './airport-new/airport-new.component';
import {AirportService} from './service/airport.service';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    FootbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileAdminComponent,
    ProfileUserComponent,
    MainComponent,
    HeaderbarComponent,
    AdminSidebarComponent,
    UserManagementComponent,
    AirportManagementComponent,
    FlightManagementComponent,
    AdminTopbarComponent,
    AirportNewComponent,
    AdminFooterComponent,
    AdminLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [UserService, AuthGuardService, AuthenticationService, AirportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
