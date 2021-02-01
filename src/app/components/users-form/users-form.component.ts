import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSave } from 'src/app/db/userSave';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  user: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  age = new FormControl('', [Validators.required, Validators.minLength(1), this.ageValidator]);
  phone = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]);

  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    phone: this.phone
  })

  action(): void {

  }

  checkInput(): void {
    if (this.myForm.valid) {
      this.user.push(
        new UserSave(
          this.myForm.value.name,
          this.myForm.value.age,
          this.myForm.value.phone))
    }
    this.myForm.reset();
    
  }

  ageValidator(inputData: AbstractControl): any {
    if (Number(inputData.value) < 0 || Number(inputData.value) > 150) {    
      return { notAge: true, msg: 'not normal age' };
    }
    return null;
  }

  
}
