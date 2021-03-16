/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

understanding
- arg, array
- return the avg of all values in the array
- if array empty return null

- we just want to avg so we want to reduce the whole array to one value, which is avg
- we will use reduce

*/

// your code here
let avgVal = function (values) {     //accum is the first
  if (values.length === 0) {
    return null;
  }

  let sum = values.reduce(function (accum, value) {
    return accum + value;
  });

  let average = sum / values.length
  return average;

};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
