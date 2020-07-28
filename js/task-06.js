"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число");
  if (isNaN(input)) {
    alert("Було введено не число, спробуйте еще раз");
  } else if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
