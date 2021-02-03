import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullPostComponent } from './components/full-post/full-post.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [{
  path:'', component: PostsComponent, children: [{
    path:':id', component: PostComponent, children: [{
      path: '', component: FullPostComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
