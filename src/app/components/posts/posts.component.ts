import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.data.subscribe(value => this.posts = value.postData)
  }

  ngOnInit(): void {
  }

}
