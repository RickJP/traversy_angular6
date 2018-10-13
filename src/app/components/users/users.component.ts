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
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
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
        age: 31,
        address: {
          street: '56 King Street',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 09:34:23'),
        hide: true
      },
      {
        firstName: 'Dave',
        lastName: 'Smith',
        age: 56,
        address: {
          street: '122 Garden Road',
          city: 'Boston',
          state: 'NA'
        },
        isActive: false,
        registered: new Date('01/02/2015 12:34:11'),
         hide: true
      },
      {
        firstName: 'Dave',
        lastName: 'Smith',
        age: 56,
        address: {
          street: '122 Garden Road',
          city: 'Boston',
          state: 'NA'
        },
        isActive: true,
        registered: new Date('11/17/2012 18:48:01'),
         hide: true
      },
      {
        firstName: 'Claire',
        lastName: 'Todd',
        age: 23,
        address: {
          street: '201Ring Road',
          city: 'Florida',
          state: 'FL'
        },
        isActive: true,
        registered: new Date('04/23/2011 16:34:23'),
         hide: true
      }
    ];
    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    };

  }

  toggeHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
