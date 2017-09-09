function largestOfFour (arr) {
  var initialArray = arr
  var finalArray = []
  for (var i = 0; i < initialArray.length; i++) {
    initialArray[i].sort(function (a, b) {
      return b - a
    })
    finalArray = [initialArray[0][0], initialArray[1][0], initialArray[2][0], initialArray[3][0]]
  }
  return finalArray
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
