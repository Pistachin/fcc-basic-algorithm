/* The goal of the challenge is to be able to eliminate elements from the array given as the first argument. To do it you'll have to filter it by using the rest of the function's arguments. You will always receive first an Array, then one or various conditions. */

var destroyer = function (arr) {
  var givenData = Array.from(arguments)
  var arrayToModify = givenData.shift() // From now on, givenData becomes only de conditons.
  var conditionsToFilter = function (number) {
    return number !== givenData[0] && number !== givenData[1] && number !== givenData[2]
  }
  var finalArray = arrayToModify.filter(conditionsToFilter)
  return finalArray
}

console.log(destroyer([3, 5, 1, 8, 2, 2], 2, 3, 5, 8))
