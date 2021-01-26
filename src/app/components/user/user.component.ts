import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  
  @Output()
  bubbleUpUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getPosts(user: User): void {
    this.bubbleUpUser.emit(user);
  }

}
