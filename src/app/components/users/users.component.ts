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
  currentClasses = {};
  currentStyles = {};

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
    image: 'http://lorempixel.com/600/600/people/3',
    isActive: true,
    balance: 100,
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
      image: 'http://lorempixel.com/600/600/people/1',
      isActive: false,
      balance: 35,
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 4000,
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
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true,
        balance: 0,
        registered: new Date('04/23/2011 16:34:23')
      }
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: 'Tom',
    //   lastName: 'Hardnuts'
    // });

    this.setCurrentClasses();
    this.setCurrentStyles();
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

setCurrentStyles() {
  this.currentStyles = {
    'padding-top': this.showExtended ? '0' : '40',
    'font-size' : this.showExtended ? '' : '30px'
  };
}

}
