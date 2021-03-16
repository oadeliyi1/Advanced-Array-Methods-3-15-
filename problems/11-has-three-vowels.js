/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

//Understanding
- arg, string
- returns boolean if string has three vowels or not
- we want to know if string has at least three different vvowels

plan
//filter returns a stirng with items that met criteria, I can have it filter vowels and iff length 3 or higher
1. split string into array
2. forEach

*/

//using filter
let hasThreeVowels = function (string) {
    let splitedWord = string.split('');
    let vowels = 'aeiou'
    let countedVowels = []
    let counter = 0;

    splitedWord.forEach(function (letter, i, array) {
        if (vowels.includes(letter) && !countedVowels.includes(letter)) {
            counter++
            countedVowels.push(letter)
        }

    });
    return counter >= 3;

}
console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
