/* The goal is to put the 'num' inside the given array. Where it should belong.
 * First the array needs to be sorted from smaller to bigger numbers.
 * Technically num will always be 1 only number.
 * It can be a whole number, or a decimal number.
 */
function getIndexToIns (arr, num) {
  var combinedArray = arr.push(num)
  var sortedArray = arr.sort(function (a, b){
      return a - b
    })
  var finderOfIndex = function (number) {
    return number === num
  }
  var finalIndexOfNum = sortedArray.findIndex(finderOfIndex)
  return finalIndexOfNum
}

console.log(getIndexToIns([40, 60, 30, 23, 1874, 1, 32.4], 50))
