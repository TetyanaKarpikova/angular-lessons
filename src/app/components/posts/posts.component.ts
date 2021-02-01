import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  @Input()
  userId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService) {
   
    this.activatedRoute.params.subscribe(value => {
      this.userId = this.router.getCurrentNavigation().extras.state.id
    });

    this.postService.getPost().subscribe( value =>  {
      this.posts = value.filter(val => val.userId === this.userId
    )});  
    
  }

    
    ngOnInit(): void{        
      
  }

}
