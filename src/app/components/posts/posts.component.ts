import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  chosenOne: Post;

  constructor(private userService: PostService) {


  }

  ngOnInit(): void {
    this.userService.getAllPosts().subscribe(value => this.posts = value)
  }

  getBubblePost(post: Post): void {
    console.log(post);
    this.chosenOne = post;
  }

}
