"use strict";

const findLongestWord = function (string) {
  let arrayWord = string.split(" ");
  let longestWord = "";

  for (let i = 0; i < arrayWord.length; i += 1) {
    if (arrayWord[i].length > longestWord.length) {
    longestWord = arrayWord[i];
    }
  }

  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації:
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
