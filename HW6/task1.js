"use strict";

//Завдання 1

//Створіть функцію яка приймає два параметри: width і height.
//Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
//Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
//Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)


//function declaration
function calculateSum(width, height){
    const areaOfRectangle = width * height;
    return areaOfRectangle
};

console.log(calculateSum(5,6))

//function expression
const functionExpression = function(width, height){    
    return  width * height
};

console.log(functionExpression(5,6));

//arrow function
const arrowExpression = (width, height) => width * height;

console.log(arrowExpression(5,6));
