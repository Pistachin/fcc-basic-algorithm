/* This challenge goes back to something easier. Your goal is to put a number inside an array where it should belong. The array will be given as the first argument of a function, and the number to include as the second argument. The place where it 'belongs' is it's position if the array is in ascending order. The return value should be the number's position in the new array. Considering that arrays start at index 0. */

var getIndexToIns = function (arr, num) {
  arr.push(num)
  var sortedArray = arr.sort(function (a, b) {
    return a - b
  })
  var finderOfIndex = function (number) {
    return number === num
  }
  var finalIndexOfNum = sortedArray.findIndex(finderOfIndex)
  return finalIndexOfNum
}

console.log(getIndexToIns([40, 60, 30, 23, 1874, 1, 32.4], 50))
