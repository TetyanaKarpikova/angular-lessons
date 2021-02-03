import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { FullPostComponent } from './components/full-post/full-post.component';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ] ,
  exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule { }
