"use strict";
/* Завдання 6: Сортування масивів

 */

const numbersList = [1,10,14,2,4,5,43,34]

const newArr = numbersList.slice().sort((a, b) => a - b);

console.log(newArr);