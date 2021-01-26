import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  @Input()
  posts: Post[];

  @Input()
  idUser: User;
  
  constructor() { }

  ngOnInit(): void {
   
  }

  
}
