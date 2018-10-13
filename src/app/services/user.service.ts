import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;


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

getData() {
  this.data = new Observable(observer => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);

    setTimeout(() => {
      observer.next(2);
    }, 2000);

    setTimeout(() => {
      observer.next(3);
    }, 3000);

    setTimeout(() => {
      observer.next({name: 'FRIEND'});
    }, 4000);

  });
  return this.data;
}

getUsers(): Observable<User[]> {
  console.log('Fetching users from service');
  return of(this.users);
}

addUser(user: User) {
  this.users.unshift(user);
}

}
