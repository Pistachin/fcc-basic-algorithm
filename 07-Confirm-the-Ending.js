/* This challenge requires you to return a true or false, depending on if the target argument is equal to the ending of the str argument. It has to be considered that 'str' can be from a simple word to a long sentence, and it also has to be considered, that the argument 'target' can also be just a character, a whole word, a whole sentence, or just a part of the sentence slicing a word. */

var confirmEnding = function (str, target) {
  var startingIndex = str.length - target.length
  var subStr1 = str.substr(startingIndex)
  if (subStr1 === target) {
    return true
  } else {
    return false
  }
}

console.log(confirmEnding('Bastian', 'n'))
