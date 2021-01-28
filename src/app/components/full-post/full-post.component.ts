import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
 
  post: Post;

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
    })
   }

  ngOnInit(): void {
   
  }

}
