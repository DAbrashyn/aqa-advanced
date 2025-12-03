"use strict";

/* Завдання 2: Копіювання з мутацією */

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((number, index) => number * index)

console.log(newArr);
