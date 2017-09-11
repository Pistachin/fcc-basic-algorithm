/* The goal of this challenge is get a true/false return depending on wether the given string is a palindrome or not. It should be case insensitive and ignore all non-alphanumeric characters. */

var palindrome = function (str) {
  var lowerCaseString = str.toLowerCase().replace(/\W+/g, '').replace(/_/g, '')
  var finalStr = lowerCaseString.split('').reverse().join('')
  if (lowerCaseString === finalStr) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('My age is 0, 0 si ega ym.'))
