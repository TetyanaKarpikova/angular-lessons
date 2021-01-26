import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { __values } from 'tslib';

@Component({
  selector: 'app-address-user',
  templateUrl: './address-user.component.html',
  styleUrls: ['./address-user.component.css']
})
export class AddressUserComponent implements OnInit {

  @Input()
  address: any[];  

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(value => value)
         
   }

  ngOnInit(): void {
     console.log(this.address) ;
  }

}
