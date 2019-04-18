import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainComponent} from './components/main/main.component';
import {ProfileAdminComponent} from './components/profile-admin/profile-admin.component';
import {AuthGuardService} from './service/auth-guard.service';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {FlightManagementComponent} from './components/flight-management/flight-management.component';
import {AirportManagementComponent} from './components/airport-management/airport-management.component';
import {AirportNewComponent} from './airport-new/airport-new.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'admin', component: ProfileAdminComponent, canActivate: [AuthGuardService]},
  {path: 'admin/user-management', component: UserManagementComponent, canActivate: [AuthGuardService]},
  {path: 'admin/airport-management', component: AirportManagementComponent, canActivate: [AuthGuardService]},
  {path: 'admin/airport-new', component: AirportNewComponent, canActivate: [AuthGuardService]},
  {path: 'admin/flight-management', component: FlightManagementComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
