import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootbarComponent } from './components/main-page/footbar/footbar.component';
import { LoginComponent } from './components/main-page/login/login.component';
import { RegisterComponent } from './components/main-page/register/register.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { MainComponent } from './components/main-page/main/main.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderbarComponent } from './components/main-page/headerbar/headerbar.component';
import {AuthGuardService} from './service/auth-guard.service';
import {AuthenticationService} from './service/authentication.service';
import { AdminSidebarComponent } from './components/profile-admin/admin-sidebar/admin-sidebar.component';
import { UserManagementComponent } from './components/admin-user/user-management/user-management.component';
import { AirportManagementComponent } from './components/admin-airport/airport-management/airport-management.component';
import { FlightManagementComponent } from './components/admin-flight/flight-management/flight-management.component';
import { AdminTopbarComponent } from './components/profile-admin/admin-topbar/admin-topbar.component';
import {DataTablesModule} from 'angular-datatables';
import { AirportNewComponent } from './components/admin-airport/airport-new/airport-new.component';
import {AirportService} from './service/airport.service';
import { AdminFooterComponent } from './components/profile-admin/admin-footer/admin-footer.component';
import { AdminLogoutComponent } from './components/profile-admin/admin-logout/admin-logout.component';
import { AirportUpdateComponent } from './components/admin-airport/airport-update/airport-update.component';
import { UserUpdateComponent } from './components/admin-user/user-update/user-update.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import {FlightService} from './service/flight.service';
import { FlightNewComponent } from './components/admin-flight/flight-new/flight-new.component';
import { FlightUpdateComponent } from './components/admin-flight/flight-update/flight-update.component';

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
    AirportUpdateComponent,
    UserUpdateComponent,
    FlightSearchComponent,
    FlightNewComponent,
    FlightUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [UserService, AuthGuardService, AuthenticationService, AirportService, FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
