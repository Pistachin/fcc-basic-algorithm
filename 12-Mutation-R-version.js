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

console.log('We are here b!tx')
console.log(mutation(['hEllo', 'HEeeeeeeeLLO']))
