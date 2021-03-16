/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

//Understanding
- args, array of numbers
- return the total sum of all numbs in array
- we want one product

//Plan
1. create function
2. create a sum variable
3. iterate through array
4. add each element to another
5. return sum

- create a whole function

- then iterate through array with reduce function
- reduce function will keep updating sum variable
*/



// your code here

let sumWithReduce = function (numbers) {
  let sum = 0;                            //QUESTION: why couldn't we allow sum to be the first element, and then make that the second argument
  if (numbers.length === 0) {
    return 0;
  }
  sum += numbers.reduce(function (accum, el) {
    return accum + el;
  });
  return sum;
};

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumWithReduce;
} catch (e) {
  module.exports = null;
}
