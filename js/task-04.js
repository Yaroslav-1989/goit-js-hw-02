"use strict";

const formatString = function (string) {
  let counterLetter = string[0];

  for (let i = 1; i <= 40; i += 1) {
    counterLetter += string[i];
  }
  return string.length > 40 ? `${counterLetter}...` : string;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації:
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// // повернеться оригінальний рядок

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// // повернеться форматований рядок
