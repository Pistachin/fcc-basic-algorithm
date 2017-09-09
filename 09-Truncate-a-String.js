/* Main goal is to have a string with a length determined by 'num'.
 * This new string will end with '...' given the case that 'num' is less than str.length.
 * These three dots will count for the final length of the string.
 * Except when num forces the final string to be 3 letters or less.
 * 'str' will always be a string.
 * 'num' will always be a number.
 */
function truncateString (str, num) {
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
