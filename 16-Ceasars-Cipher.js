/* The final challenge is one of the most enjoyable challenges that I've done. It challenges you to 'decipher' things, which is funnier than just putting a number in it's right position. Then, the goal of this challenge is to use the cipher method called ROT13, which is based in the latin alphabet main version (without any special character that languages like spanish, german or portuguese might add). You have to decipher whatever it comes as first argument of the main function, this argument being always a string.  */

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
  })
  var modifiedValuesToLetters = modifiedUnicodeValues.map(function (value) {
    return String.fromCharCode(value)
  })
  var stringedLetters = modifiedValuesToLetters.join('')
  var finalString = stringedLetters.toUpperCase()
  return finalString
}

console.log(rot13('LBH QVQ VG!'))
