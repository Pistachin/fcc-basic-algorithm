/* This challenge requires you to return the largest number for each sub-array. The same challenge specifies that there will be only 4 sub-arrays. */

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

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

/* This was my first solution. I found myself stuck with this challenge for a long time, until I took in consideration what the challenge says about simplicity of considering only 4 sub-arrays. This made it easier to solve, since it was a limited and known amount of sub-arrays. */
