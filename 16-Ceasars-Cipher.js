/* The goal is to decipher or cipher the given text. Using the cipher method called ROT13.
 * The ROT13 states that each letter equals to one 13 places of distance on the latin alphabet.
 * This happens from letters 1 to 13, where letter 1 equals letter 14, and letter 5 for instance
 * equals letter 18. And it also goes backwards. So letter 15 would equal letter 15-13, therefore,
 * that would be letter number 2.
 */
function rot13 (str) { // LBH QVQ VG!
  var lowerCase = str.toLowerCase()
  var stringToArray = lowerCase.split('')
  var unicodeValues = stringToArray.map(function (letter) {
    return letter.charCodeAt(0)
  })
  var modifiedUnicodeValues = unicodeValues.map(function (value) {
    if (97 <= value && 109 >= value) {
      return value + 13
    } else if (110 <= value && 122 >= value) {
      return value - 13
    } else {
      return value
    }
  });
  var modifiedValuesToLetters = modifiedUnicodeValues.map(function (value) {
    return String.fromCharCode(value)
  });
  var stringedLetters = modifiedValuesToLetters.join('')
  var finalString = stringedLetters.toUpperCase()
  return finalString
}

// Change the inputs below to test

console.log(rot13("LBH QVQ VG!"))
