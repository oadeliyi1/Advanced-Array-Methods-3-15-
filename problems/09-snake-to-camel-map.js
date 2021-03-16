/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

//Understanding
- arg, snake_cased string
- return, Pascaled version of string

snaked_cased = each word seperated with _
PascalCased = each first char is capital

- we're trying to change each element
- we want to remove the _, can we use split("_")
- use map to modidy the first string
plan
1. write function
2. make string an array so we can traverse it easily - split
3. iterate through array
4. make each first char capital
*/
let word = "Hi"
console.log(word[0])

// your code here
function snakeToCamel(string) {

    let splited = string.split('_');

    let pascalCased = splited.map(function (word) {
        let capFirstLetter = word[0].toUpperCase();
        let restOfWord = word.slice(1)     //slice from second letter to end
        return capFirstLetter + restOfWord.toLowerCase();
    })
    let newString = pascalCased.join('');
    return newString;

}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
