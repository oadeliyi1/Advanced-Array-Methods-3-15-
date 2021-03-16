/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

//Understanding
- arg, sentence string
- return, longest word in sentence
- we need to count the characters in each word

//plan
1. declare function
2. split function into array of words
iterate through words, get length, if length is larger than current largest length replace lsrgest
3. compare lengths of each word
4. have


*/

let longestWord = function (sentence) {
    if (sentence.length === 0) {
        return sentence;
    };
    let splited = sentence.split(' ');

    let lengthOfLargest = 0;
    let largest;
    splited.forEach(function (word, i, array) {     //QUESTION: isn't this a hassle, why not just use a for loop. Could we also use filter
        if (word.length > lengthOfLargest) {
            largest = word;
            lengthOfLargest = word.length;
        }

    });
    return largest;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''


// //with FOR Loop
// function longestWord(sentence) {
//     let splited = sentence.split(' ');

//     let largestWord = splited[0];

//     for (i = 1; i < splited.length; i++) {
//         let currentWord = splited[i];
//         if (currentWord.length > largestWord.length) {
//             largestWord = currentWord;
//         }

//     }
//     return largestWord;


// }

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
