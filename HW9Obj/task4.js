"use strict";
/* Завдання 4: Створіть об'єкт person */

const person = {
  firstName: "Denys",
  lastName: "Abrashyn",
  age: 41
};

person.email = "denis.abrashin@gmail.com";
delete person.age;
console.log(person);