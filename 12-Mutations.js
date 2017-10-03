/* This is a challenge that I personally found quite complex compared to the previous ones. As many previous challenges you'll be given a function with two arguments, both being strings. Your goal is to check if the first string contains all the characters of the second string, with a 'true/false' return. First thing, is case insensitive, so it has to be considered the same 'foo' and 'FOO'. Based on tests you might find as well that repetition doesn't count, so there is no difference between 'e' and 'eeeeeeeee'. It has to be considered as well that the first string could contain, not only the characters of the second one, but more. This means that if first string is 'FooBar', and second 'fOO', return should be 'true'. */

var mutation = function (arr) {
  var firstElm = arr[0].toLowerCase()
  var secondElm = arr[1].toLowerCase()
  var j = 0
  var secondCheck = ''
  while (j < secondElm.length) {
    var firstCheck = firstElm.indexOf(secondElm[j])
    if (firstCheck !== -1 && secondCheck !== secondElm) {
      secondCheck = secondCheck + secondElm[j]
      j++
    } else {
      j = secondElm.length + 1
    }
  }
  return secondCheck === secondElm
}

console.log(mutation(['hEllo', 'HEeeeeeeLLO']))
