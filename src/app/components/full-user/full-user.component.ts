import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  @Input()
  fullUser: User;

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {     
    this.activatedRouter.params.subscribe(value => {
        // console.log(history.state);
        this.fullUser = this.router.getCurrentNavigation().extras.state as User
      })
  }
  
  ngOnInit(): void {
            
  }

  readPosts(): void {
    this.router.navigate(['posts'],
      {relativeTo: this.activatedRouter,
        state: this.fullUser })
  }

}
