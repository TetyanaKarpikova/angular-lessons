import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddressUserComponent } from './components/address-user/address-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    AddressUserComponent
  ],
  imports: [
    BrowserModule,     
    RouterModule.forRoot([{
      path: 'link/home', component : HomeComponent
    }, 
    {
      path: 'link/users', component : UsersComponent, children: [
        {path:':id', component: AddressUserComponent
      }]
    }
  ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
