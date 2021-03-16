/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"


//Understanding
- arg, accepts a sentence
- words shorter than 3 char ,return the same word
    - check if word, if ends in vowel, repeat word
    - check if word doesnt end in vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself


plan
1. create function
- split sentnence
2. create varaible that will hold new unjoined sentence array
3. iterate through sentence array
4. perform actions on array depending if ending in vowel






*/


let repeater = function (word) {
  return word.concat(word);
}

let pigLatinizer = function (word) {
  let vowels = 'aeiouAEIOU'
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i]
    if (vowels.includes(letter)) {
      let secondPart = word.slice(i);
      return word + secondPart;
    }



    let firstPart = word.slice(0)
  }
};
// console.log(pigLatinizer("trash"))

// your code here
function repeatingTranslate(sentence) {
  let splited = sentence.split(' ');
  let vowels = 'aeiouAEIOU'

  let newSentence = splited.map(function (word) {
    let lastLetter = word[word.length - 1]
    let is
    if (word.length < 3) {
      return word;
    } else {
      if (vowels.includes(lastLetter)) {
        let repeatedWord = repeater(word)  //will return doubles
        return repeatedWord;
      } else {
        let pigLatinWord = pigLatinizer(word)
        return pigLatinWord;
      }
    }
  });
  let joined = newSentence.join(' ')
  return joined;
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = repeatingTranslate;
} catch (e) {
  module.exports = null;
}
