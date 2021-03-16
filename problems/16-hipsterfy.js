/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'


//understand
- arg, sentence string
- returns sentence in which every word is missing it's last vowel

- we want to remove last vowels
- normally we would iterate backwards to get that last vowel, but we cant do that
- first let's split the sentence into words

- lets create a helper function that iterates backwards through each word
*/

let lastVowelRemover = function (word) {
    let vowels = 'aeiou'
    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i]
        if (vowels.includes(letter)) {
            let firstPart = word.slice(0, i);
            let secondPart = word.slice(i + 1);
            return firstPart + secondPart;
        }
    }
    return word;
}

// console.log(lastVowelRemover("thy"))

let hipsterfy = function (sentence) {
    let splited = sentence.split(' ');

    let deVoweled = splited.map(function (word) {
        return lastVowelRemover(word);
    });
    let newSent = deVoweled.join(' ')
    return newSent;
}
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
