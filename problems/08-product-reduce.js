/*

Write a function `productWithReduce(nums)` that takes in an array of numbers.
The function should return the total product of multiplying all numbers of the
array together.

You can assume that `nums` will not be an empty array.

Solve this using Array's `reduce()` method.

Examples:

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12

-understanding
- arg, array of numbers
- return total product of multiplying all numbers together
- we'll use reduce to get one output

plan
1. write function
2. declare product variable
3.iterate through array
4. multiply all elements together   - use reduce method to keep updating product
5. return product

*/


// your code here
function productWithReduce(nums) {
  let product = 1;
  product *= nums.reduce(function (accum, el) {
    return accum * el;
  });
  return product;
}


// console.log(productWithReduce([10, 3, 5, 2])); // 300
// console.log(productWithReduce([4, 3])); // 12

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = productWithReduce;
} catch (e) {
  module.exports = null;
}
