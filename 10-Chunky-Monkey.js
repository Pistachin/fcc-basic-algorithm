/* This challenge asks you to split an array into a determined amount of sub-arrays. You'll be given a function with two arguments. First one is going to be an array, and second argument a number. Te logic to split the new array, will be making each and every sub-array with a length determined by the second argument. */

var chunkArrayInGroups = function (arr, size) {
  var i = 1
  var firstArray = [arr.slice(0, size)]
  while (i < arr.length / size) {
    var start = i * size
    var length = start + size
    var secondArray = arr.slice(start, length)
    firstArray.push(secondArray)
    i++
  }
  return firstArray
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f'], 2))
