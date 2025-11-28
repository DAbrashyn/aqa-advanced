"use strict";

/* Завдання 3

Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі, якщо denominator дорівнює 0 або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
 */

function divide (numerator, denominator) { 
    
    try {        
        if (isNaN(numerator) || isNaN(denominator)) {            
            throw new Error("numerator or denominator should be a numbers");           
        }
        if (denominator === 0) {
           throw new Error("denominator should not be zero");
        }         

        return numerator / denominator;

    } catch (error) {
         console.log("Error caught: " + error.message);   
    } finally {
        console.log('Робота завершена');
    }
};
divide(5, 3);
divide(4, 0);
divide(3, "sdfs");

