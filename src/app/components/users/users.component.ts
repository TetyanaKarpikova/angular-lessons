import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  
  chosenPost: Post[];
  chosenUser: User;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value)

  }

  getBubbleUser(user: User): void {   
    this.postService.getAllPosts().subscribe(value => 
      this.chosenPost = value)
      
      this.chosenUser = user
  }

  
}
