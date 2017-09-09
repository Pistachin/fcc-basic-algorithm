var largestOfFour = function (arr) {
  var initialArray = arr
  var secondArray = initialArray.map(function (array) {
    array.sort(function (a, b) {
      return b - a
    })
    return array
  })
  var finalArray = secondArray.map(function (value) {
    return value[0]
  })
  return finalArray
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [43829, 2, 4728, 564, 6591]]))
