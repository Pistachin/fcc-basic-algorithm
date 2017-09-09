var findLongestWord = function (str) {
  var primalStr = str
  var firstArray = primalStr.split(' ')
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
