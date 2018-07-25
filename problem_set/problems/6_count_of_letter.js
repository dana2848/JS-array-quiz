/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1
***********************************************************************/

function countOfLetter(string, char) {
  var count = 0;
  // var word = string[i].toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === char) {
      count++;
    }
  }
  return count;
}
console.log(countOfLetter('mississippi', 's'));
// countOfLetter('mississippi', 's'); // => 4
// countOfLetter('MISSISSIPPI', 'p'); // => 2
// countOfLetter('BOOTCAMP', 't'); // => 1

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countOfLetter;
