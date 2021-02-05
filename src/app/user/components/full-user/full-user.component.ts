import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  userData: User;

  constructor(private activetedRouter: ActivatedRoute) {
    this.activetedRouter.params.subscribe(value => {
      this.userData = history.state

    })
  }

  ngOnInit(): void {

  }

}
