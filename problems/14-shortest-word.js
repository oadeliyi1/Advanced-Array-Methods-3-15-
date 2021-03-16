/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

//understand
- arg, sentence
- return shortest word in sentence
- if there's a tie, return word that appears later in sentence
- we want to get the word with the shortest length
- if there's a tie, get the one that appears later, so well need to use our i parameter

plan
1. split sentence
2. shortestWord variable
3. shortestLength variable
4. index of largest length
5. iterate through array
6. check if current element is larger than standard
7. return largestWord

*/

// your code here
function shortestWord(sentence) {
  let splited = sentence.split(' ');
  let shortestWord;
  let shortestLength = Infinity;

  splited.forEach(function (currentWord) {
    if (currentWord.length <= shortestLength) {
      shortestWord = currentWord;
      shortestLength = currentWord.length;
    }

  });
  return shortestWord;
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
