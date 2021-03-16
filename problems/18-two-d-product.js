/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

-Understanding
  - lets use forEach and reduce
  - we need to iterate through rows and columns, all elements essentially
  - we need to have a variable that keeps track of product

-Plan
1. create function
2. define a total_product variable
3. iterate through the outer array that holds subarray's, where every element is an array  /in general
4. iterate through columns. in other words, iterate through elements or subarrays
5. multiply each element by total product
6. return product

speak in gernal , now what can we use specifically
*/


// your code here
function twoDimensionalProduct(array) {
  let total_product = 1;

  array.forEach(function (row) {   //we're iterating through rows first
    //row is the subarray, an array of numbers
    total_product *= row.reduce(function (accum, el) {
      return accum * el                                    //this reduces to
    });

    //you could have also just made total product to be the the accumulator initializer
  });
  return total_product;
};

//to find total product



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = twoDimensionalProduct;
} catch (e) {
  module.exports = null;
}
