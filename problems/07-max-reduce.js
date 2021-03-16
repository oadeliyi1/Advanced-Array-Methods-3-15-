/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

//Understading
- arg, array of nums
- return largest num in array
- we just want one output

//Plan
1. declare largest variable that will hold the largest
2.iterate through array


*/

function maxWithReduce(nums) {
  let largest = nums.reduce(function (accum, el) {
    if (el > accum) {
      return el;
    } else {
      return accum;
    }

  });   //largest becomes first accum and first element is at index 0   //is this redundant
  return largest;
};

// console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxWithReduce([-2, -3, -7, 3])); // 3

// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
