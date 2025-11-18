"use strict";

//Завдання 1: Визначення рівня успішності студента за допомогою if/else

const averageGrade = 66;
let grade;

if (averageGrade<60) {   
    grade = "Незадовільно";
} else if (averageGrade<=70) {   
    grade = "Задовільно";
} else if (averageGrade <= 80) {   
    grade = "Добре";
} else if (averageGrade <= 90) {   
    grade = "Дуже добре";
} else {   
    grade = "Відмінно";
}

console.log(`Рівень успішності студента визначено на рівні: ${grade}`);
