/* The main goal of this challenge is to return the factorial of a given number. */

var factorialize = function (num) {
  var n = 1
  var x = 1
  for (var i = 0; i < num; i++) {
    n = n * x
    x++
  }
  return n
}

console.log(factorialize(5))
