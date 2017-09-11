/* A simple requirement. To return only the lenght of the longest word in a given string. The 'return' result should be a number. */

var findLongestWord = function (str) {
  var firstArray = str.split(' ')
  var secondArray = firstArray.map(function (val) {
    return val.length
  })
  var sortedArray = secondArray.sort(function (a, b) {
    return b - a
  })
  var finalNumber = sortedArray[0]
  return finalNumber
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
