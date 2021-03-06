import { Component, enableProdMode, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {
  }


ngOnInit() {
  this.user = {
      firstName: 'Jenny',
      lastName: 'Harvey',
      email: ''
    };
}

}







// xport class UserComponent {
//   // Properties
//   personId;
//   firstName: string;
//   lastName: string;
//   age: number;
//   address;
//   foo: any;
//   isGay: boolean;
//   numArray: number[];
//   strArray: string[];
//   mixedArray: any[];
//   myTuple: [string, number, boolean];
//   unusable: void;
//   u: undefined;
//   n: null;

//   // Methods
//   constructor() {
//     this.firstName = 'Keith';
//     this.lastName = 'Fletcher';
//     this.age = 46;

//     this.address = {
//       street: '23 Pudding Lane',
//       city: 'Bedford',
//       county: 'Bedfordshire'
//     };

//     this.foo = 'nice';
//     this.numArray = [1, 2, 3];
//     this.strArray = ['A', 'B', 'C'];
//     this.mixedArray = [2, 'A', '67'];

//     this.myTuple = ['hello', 7, false];
//     this.unusable = undefined;
//     this.u = undefined;
//     this.n = null;

//     console.log(this.multiplyNumbers(20, 2));
//   }

//   showAge() {
//     return this.age + 10;
//   }

//   multiplyNumbers(num1: number, num2: number): number {
//     return num1 * num2;
//   }
// }
