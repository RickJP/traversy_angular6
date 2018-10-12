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
  enableAdd = false;

  constructor() { }

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
    image: 'http://lorempixel.com/600/600/people/3'
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
    image: 'http://lorempixel.com/600/600/people/1'
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
      image: 'http://lorempixel.com/600/600/people/1'
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
      image: 'http://lorempixel.com/600/600/people/4'
    }
  ];
  this.loaded = true;

  // this.addUser({
  //   firstName: 'Tom',
  //   lastName: 'Hardnuts'
  // });

  }



addUser(user: User) {
  this.users.push(user);
}


}
