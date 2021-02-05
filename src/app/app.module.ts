import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot([{
      path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }, 
  {
      path:'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
