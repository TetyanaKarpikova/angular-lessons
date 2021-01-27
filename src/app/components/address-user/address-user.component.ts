import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-address-user',
  templateUrl: './address-user.component.html',
  styleUrls: ['./address-user.component.css']
})
export class AddressUserComponent implements OnInit {

  data: number; 

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(value => this.data = value.id)
       
   }

  ngOnInit(): void {
    
  }

}
