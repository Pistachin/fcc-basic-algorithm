/* This challenge requires you to return an array determined by a previous array (first argument of a given function) and a number (second argument of the same function). Your task will be to have a code that eliminates as many elements from the first array as the second argument says, starting to eliminate from the head (beginning, index 0) of the initial array. */

var slasher = function (arr, howMany) {
  var amount = howMany
  var i = 0
  while (i < amount) {
    arr.shift()
    i++
  }
  return arr
}

console.log(slasher([1, 2, 3], 2))
