/* This challenge asks for a little bit more complex result than the previous ones. But this is due to the fact that the challenge itself has things to be cleared prior to resolving it. Then, what the challenge asks you to do is to break a string at a given point. The string will be the first argument of the sentence ('str'), and the length of the final string will be given as the second argument of the function ('num'). Given the case that 'num' is not a positive number, 'return' should be an empty string. After the returned string, three dots ('...') will be added, and these have to be counted in the final length, unless the value of 'num' is three or lower, then this three dots wouldn't count for the final length. */

var truncateString = function (str, num) {
  var letters = num
  var finalStr = ''
  if (letters < str.length) {
    if (letters <= 3) {
      finalStr = str.slice(0, letters) + '...'
    } else {
      finalStr = str.slice(0, letters - 3) + '...'
    }
  } else {
    finalStr = str
  }
  return finalStr
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 43))
