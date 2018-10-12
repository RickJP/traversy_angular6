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
      image: 'http://lorempixel.com/600/600/people/1',
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
        image: 'http://lorempixel.com/600/600/people/4',
        isActive: true
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
