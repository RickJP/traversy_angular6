import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];


  constructor() {
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
  }


getUsers(): User[] {
  console.log('Fetching users from service');
  return this.users;
}

addUser(user: User) {
  this.users.unshift(user);
}

}
