'use strict';

// Task 1

// const user = {
//   userName: 'Vlad',
//   age: 16,
//   showUserName() {
//     return this.userName;
//   },
//   updateAge() {
//     return this.age + 1;
//   },
// };

// console.log(user.userName);
// console.log(user.age);
// console.log(user.showUserName());
// console.log(user.updateAge());

// / Task 1

// Task 2

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// // Виклик через зміну
// const salary = function () {
//   let sumCount = 0;

//   for (const salary of Object.values(salaries)) {
//     sumCount += salary;
//   }

//   return sumCount;
// };

// const sum = salary();

// console.log(sum);

//---------

// // Виклик через функцію
// const salary = function () {
//   let sum = 0;

//   for (const personSalary of Object.values(salaries)) {
//     sum += personSalary;
//   }

//   return sum;
// };

// console.log(salary());

// / Task 2

// Task 3

// const calculator = {
//   read(a, b) {
//     this.a = +prompt('Введіть перше число');
//     this.b = +prompt('Введіть друге число');
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mult());

// / Task 3

// Task 4

// const cafe = {
//   name: 'Republic',
//   width: 200,
//   height: 300,
//   personal: 5,
//   hr: true,
// };

// for (const elements of Object.entries(cafe)) {
//   console.log(elements);
// }

// const area = cafe.width * cafe.height;

// console.log(area);

//---------

// // for (const element in cafe) {
// //   console.log(`${element} - ${cafe[element]}`);
// // }

// / Task 4
