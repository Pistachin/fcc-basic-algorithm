/* This challenge requires you to return the largest number for each sub-array. The same challenge specifies that there will be only 4 sub-arrays. */

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

console.log(largestOfFour([[4, 5, 1, 3], [523, 27, 18, 26], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [43829, 2, 4728, 564, 6591]]))

/* This is the second way to solve the challenge. After solving some of the following challenges, I decided to come back to this and to try to solve it properly. I didn't like the fact that my previous solution only worked for a limited and specified amount of sub-arrays. This new solution allowed me to introduce as many sub-arrays as I wanted, and I would also get the largest number of each one. And obviously, it passed the FCC challenge. */
