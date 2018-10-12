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
  currentClasses = {};

  constructor() { }

  ngOnInit() {

  this.showExtended = true;
  this.loaded = false;

  this.users = [
    {
    firstName: 'Tony',
    lastName: 'Harvey',
    age: 70,
    address: {
      street: '56 King Street',
      city: 'Boston',
      state: 'MA'
    },
    image: 'http://lorempixel.com/600/600/people/3',
    isActive: true
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
      image: 'http://lorempixel.com/600/600/people/5',
      isActive: false
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
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

    this.setCurrentClasses();

  }



addUser(user: User) {
  this.users.push(user);
}


setCurrentClasses() {
  this.currentClasses = {
    'btn-success': this.enableAdd,
    'big-text': this.showExtended
  };
}

}
