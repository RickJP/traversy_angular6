import { Component, enableProdMode } from '@angular/core';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName = 'David';
  lastName = 'Jones';
  age = 45;

  // Methods
  constructor() {

    // console.log('Hello user...');
   // this.sayHello();
  console.log(this.age);
   this.hasBirthday();
   console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;

  }
}
