"use strict";
/* Завдання 5: Перебір властивостей об'єкта */

const users = [
  {name: "Denys", email: "user1@gmail.com", age: 41, gender: "male"},
  {name: "Jan", email: "user2@gmail.com", age: 31, gender: "male"},
  {name: "Mariya", email: "user3@gmail.com", age: 21, gender: "female"}
];

let hisHer;

for (const {name, email, age, gender} of users) {
    if(gender === "male"){      
        hisHer = "his";
    } else {
        hisHer = "her";
    }
  console.log(`${name} is ${age} years old and ${hisHer} email is ${email}`);
}