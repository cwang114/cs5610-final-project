import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainComponent} from './components/main/main.component';
import {ProfileAdminComponent} from './components/profile-admin/profile-admin.component';
import {AuthGuardService} from './service/auth-guard.service';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'admin', component: ProfileAdminComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
