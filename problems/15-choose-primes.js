/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

//understanding
- arg, array of numbers
- return new array with all primes
-consider using helper function

- we want to grab all the primes out we can use filter method
- let create helper function that determines if function is prime

*/

function isPrime(number) {
    //cannot be divisible by anything but itself and 1
    // lets check if number is divisible by any other number
    //remember these methods are only for arrays

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            return false;
        }
    return true;
}

function choosePrimes(numbers) {


    let arePrimes = numbers.filter(function (number) {
        if (isPrime(number)) {
            return number;
        }
    });
    return arePrimes;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
