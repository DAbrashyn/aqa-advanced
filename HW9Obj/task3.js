"use strict";
/* Завдання 3:  */

const car1 = {
  brand: "Alfa Romeo",
  model: "147",
  year: 2006
};

const car2 = {
  brand: "Alfa Romeo",
  model: "Gulia",
  owner: "Denys"
};

const car3 = {...car1, ...car2};

console.log(car3);
