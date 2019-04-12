import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteManagementComponent } from './route-management/route-management.component';
import { FootbarComponent } from './footbar/footbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteManagementComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
