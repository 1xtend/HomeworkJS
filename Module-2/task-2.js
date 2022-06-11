'use strict';

// Task 1

// const hello1 = () => console.log('Привіт JavaScript');

// hello1();

// / Task 1

// Task 2

// const hello2 = (name) => console.log(`Привіт, ${name}`);

// hello2('Василь');

// function hello2(name) {
//   return `Привіт, ${name}`;
// }

// console.log(hello2('Василь'));

// / Task 2

// Task 3

// const mul = function (n, m) {
//   console.log(n + m);
//   console.log(n * m);
//   console.log(n / m);
// };

// mul(6, 2);

// / Task 3

// Task 4

// const myNewArrowFunction = (...args) => console.log(args);

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction('Js', 'Python', 'Java', 'PHP', 'C++');

// -----------------

// const myNewArrowFunction = (...args) => {
//   for (const arrowArray of args) {
//     console.log(arrowArray);
//   }
// };

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction('Js', 'Python', 'Java', 'PHP', 'C++');

// / Task 4

// Task 5

// function myAverageScore(array) {
//   let scoreSum = 0;
//   for (const element of array) {
//     scoreSum += element;
//   }

//   const average = scoreSum / array.length;

//   if (average <= 100 && average >= 91) {
//     return 'Ваша оцінка A';
//   } else if (average <= 90 && average >= 81) {
//     return 'Ваша оцінка B';
//   } else if (average <= 80 && average >= 71) {
//     return 'Ваша оцінка C';
//   } else if (average <= 70) {
//     return 'Ваша оцінка D';
//   }
// }

// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// / Task 5
