import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
   
  post: Post;

  constructor(
    private activetedRoute: ActivatedRoute,
    private router: Router) 
    { 
      this.activetedRoute.params.subscribe(value => {        
       this.post = (this.router.getCurrentNavigation().extras.state) as Post;
      })     
  }

  ngOnInit(): void {
    
  }

}
