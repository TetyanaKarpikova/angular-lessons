import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullUserComponent } from './components/full-user/full-user.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [{
    path: ':id', component: UserComponent, children: [{
      path: '', component: FullUserComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
