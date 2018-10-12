import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd = true;

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
        registered: new Date('01/02/2018 09:34:23')
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
        registered: new Date('01/02/2015 12:34:11')
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
        registered: new Date('11/17/2012 18:48:01')
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
        registered: new Date('04/23/2011 16:34:23')
      }
    ];
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
