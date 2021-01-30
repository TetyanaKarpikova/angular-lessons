import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressModel } from 'src/app/models/Address';
import { __values } from 'tslib';

@Component({
  selector: 'app-address-user',
  templateUrl: './address-user.component.html',
  styleUrls: ['./address-user.component.css']
})
export class AddressUserComponent implements OnInit {

  data: AddressModel;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(value => this.data = (history.state.address))
          
   }

  ngOnInit(): void {
    
  }

}
