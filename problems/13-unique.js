/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

-Understading
- arg, array
- return new array contianing elements of input array without duplicates
- we want to return an array without any duplicates
- we want to iterate through array, and if we find element of same kind ignore it

-plan
1. write function
- create empty array variable
2. iterate through array
3. if element not in array, add it to new array
*/

// your code here
let unique = function (numbers) {
    let newArray = [];

    numbers.forEach(function (num) {
        if (!newArray.includes(num)) {
            newArray.push(num)
        }

    });
    return newArray;

}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
