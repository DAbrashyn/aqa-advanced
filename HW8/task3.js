"use strict";
/* Завдання 3: Обчислення суми елементів масиву

 */

const arr = [10, 20, 30, 40, 50];

const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);
