/* This challenge asks for a simple thing. Repeat a string a determined amount of times. The string will be given as the first argument of the function ('str'), and the amount of times that it has to be repeated will be set as the second argument of the sentence ('num'). The only added thing to be considered, is 'num' being negative, where the 'return' should be an empty string. */

var repeatStringNumTimes = function (str, num) {
  var mainStr = ''
  var i = 0
  while (i < num) {
    mainStr = mainStr + str
    i++
  }
  return mainStr
}

console.log(repeatStringNumTimes('abc', 125))
