"use strict";
//Завдання 2: Визначення рівня успішності студента за допомогою switch

const averageGrade = 85;
let grade;

switch (true){
case averageGrade < 60:
        grade = "Незадовільно";
        break;
    case averageGrade <= 70: 
        grade = "Задовільно";
        break;
    case averageGrade <= 80:
        grade = "Добре";
        break;
    case averageGrade <= 90: 
        grade = "Дуже добре";
        break;
    case averageGrade <= 100: 
        grade = "Відмінно";
        break;
    default:      
        grade = "Не може бути більше 100";
        break;
}

console.log(`Рівень успішності студента визначено на рівні: ${grade}`);