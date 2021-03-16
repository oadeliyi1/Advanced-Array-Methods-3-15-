/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'


- arg, string
- return a new string, containing only words that dont have letter e in them
- use filter, to create an array without elements without 'e'
*/

// your code here
let removeEWords = function (sentence) {
  let newSentence = sentence.split(' ')  //make sentence an array so we can use filter method

  let noEs = newSentence.filter(function (word, i, array) {
    return !word.includes('e')
  });    //word is essentially newSentence[i], so each word in array

  let noEsSentence = noEs.join(' ')
  return noEsSentence;

};

// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
