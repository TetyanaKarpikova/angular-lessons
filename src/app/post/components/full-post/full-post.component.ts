import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
   
  post: any;

  constructor(
    private activetedRoute: ActivatedRoute,
    private router: Router) 
    { 
      this.activetedRoute.params.subscribe(value => {        
       this.post = (this.router.getCurrentNavigation().extras.state)
      })
      console.log(this.post)
  }

  ngOnInit(): void {
    console.log('full post')
  }

}
