/* This is a challenge that I personally found quite complex compared to the previous ones. As many previous challenges you'll be given a function with two arguments, both being strings. Your goal is to check if the first string contains all the characters of the second string, with a 'true/false' return. First thing, is case insensitive, so it has to be considered the same 'foo' and 'FOO'. Based on tests you might find as well that repetition doesn't count, so there is no difference between 'e' and 'eeeeeeeee'. It has to be considered as well that the first string could contain, not only the characters of the second one, but more. This means that if first string is 'FooBar', and second 'fOO', return should be 'true'. */

/* This is a very special solution. It also solves and passes challenge 12, but this code was written by a senior developer who knows a lot more about JS than me. So, if you don't understand this code, it's normal. */

var createMatrixFromStringArray = function (inputArray) {
  return inputArray.map(function (input) {
    return input
      .toLowerCase()
      .split('')
  })
}

var createCharsArrayFromStringArray = function (stringArray) {
  var stringObject = stringArray.reduce(function (memo, char) {
    memo[char] = 0
    return memo
  }, {})

  return Object.keys(stringObject)
}

/* Check if first element contains all chars in the second
 * @param {String[]} inputArray - Always length 2
 * @return {Bool}
 */
var hasCharsIncluded = function (inputArray) {
  var inputMatrix = createMatrixFromStringArray(inputArray)
  var tester = createCharsArrayFromStringArray(inputMatrix[1])

  return inputMatrix[0].every(function (char) {
    return ~tester.indexOf(char)
  })
}

// For the sake of the tests :pray:
var mutation = hasCharsIncluded

console.log(mutation(['hEllo', 'HEeeeeeeeLLO']))
