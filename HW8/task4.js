"use strict";
/* Завдання 4: Відбір парних чисел
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((index) => index % 2 === 1);

console.log(newArr);