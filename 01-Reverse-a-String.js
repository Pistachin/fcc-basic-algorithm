/* The main goal of this challenge is quite simple, you have to reverse a string. */

var reverseString = function (str) {
  var reversedStr = str.split('')
    .reverse()
    .join('')
  return reversedStr
}

console.log(reverseString('What is a String? A string is text.'))
