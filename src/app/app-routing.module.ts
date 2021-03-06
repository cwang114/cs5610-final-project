import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/main-page/login/login.component';
import {RegisterComponent} from './components/main-page/register/register.component';
import {MainComponent} from './components/main-page/main/main.component';
import {ProfileAdminComponent} from './components/profile-admin/profile-admin.component';
import {AuthGuardService} from './service/auth-guard.service';
import {UserManagementComponent} from './components/admin-user/user-management/user-management.component';
import {FlightManagementComponent} from './components/admin-flight/flight-management/flight-management.component';
import {AirportManagementComponent} from './components/admin-airport/airport-management/airport-management.component';
import {AirportNewComponent} from './components/admin-airport/airport-new/airport-new.component';
import {AirportUpdateComponent} from './components/admin-airport/airport-update/airport-update.component';
import {UserUpdateComponent} from './components/admin-user/user-update/user-update.component';
import {FlightSearchComponent} from './components/flight-search/flight-search.component';
import {FlightNewComponent} from './components/admin-flight/flight-new/flight-new.component';
import {FlightUpdateComponent} from './components/admin-flight/flight-update/flight-update.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'admin', component: ProfileAdminComponent, canActivate: [AuthGuardService]},
  {path: 'admin/user-management', component: UserManagementComponent, canActivate: [AuthGuardService]},
  {path: 'admin/user-update/:userId', component: UserUpdateComponent, canActivate: [AuthGuardService]},
  {path: 'admin/airport-management', component: AirportManagementComponent, canActivate: [AuthGuardService]},
  {path: 'admin/airport-new', component: AirportNewComponent, canActivate: [AuthGuardService]},
  {path: 'admin/airport-update/:airportId', component: AirportUpdateComponent, canActivate: [AuthGuardService]},
  {path: 'admin/flight-management', component: FlightManagementComponent, canActivate: [AuthGuardService]},
  {path: 'admin/flight-new', component: FlightNewComponent, canActivate: [AuthGuardService]},
  {path: 'admin/flight-update/:flightId', component: FlightUpdateComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'find-flights', component: FlightSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
