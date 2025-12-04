"use strict";

/* Завдання 2: Створіть об'єкт book з такими властивостями: */

const book = {
  title: "Принцип 80/20",
  author: "Річард Кох",
  year: "2017"
};

const {title, author, year} = book;

console.log(`Назва:${title} Автор:${author} Рік:${year}`);