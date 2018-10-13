import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };


  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd = false;
  showUserForm = false;

  constructor() {}

  ngOnInit() {
    this.showExtended = true;
    this.loaded = false;

    this.users = [
      {
        firstName: 'Jenny',
        lastName: 'Harvey',
        email: 'jen12@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 09:34:23'),
        hide: true
      },
      {
        firstName: 'Dave',
        lastName: 'Smith',
        email: 'darkm@gmail.com',
        isActive: false,
        registered: new Date('01/02/2015 12:34:11'),
         hide: true
      },
      {
        firstName: 'Dave',
        lastName: 'Smith',
        email: 'happyworld@gmail.com',
        isActive: true,
        registered: new Date('11/17/2012 18:48:01'),
         hide: true
      }
    ];
    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };

  // }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }

}
