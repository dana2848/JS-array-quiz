/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
  var counter = 0;
  var letters = {};
  for (var i = 0; i < string.length; i++) {
    if(letters[string[i]] === undefined) {
      letters[string[i]] = 1;
    } else {
      letters[string[i]]++;
      console.log(letters);
    }
  }
  for (var key in letters) {
    if(letters[key] > 1) {
      counter++;
    }
  }console.log(counter);
  return counter;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
