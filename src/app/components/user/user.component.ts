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
  address = {
    street: '100 Park Lane',
    city: 'Beford',
    county: 'Bedfordshire'
  };

  // Methods
  constructor() {

  }

  showAge() {
    return this.age + 10;
  }
}
