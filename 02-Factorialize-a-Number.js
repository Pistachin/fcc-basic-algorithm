var factorialize = function (num) {
  var givenNumber = num
  var n = 1
  var x = 1
  for (var i = 0; i < givenNumber; i++) {
    n = n * x
    x++
  }
  return n
}

console.log(factorialize(5))
