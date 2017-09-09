
function repeatStringNumTimes (str, num) {
  var mainStr = ''
  var i = 0
  while (i < num) {
    mainStr = mainStr + str
    i++
  }
  return mainStr
}

console.log(repeatStringNumTimes('abc', 5))

// The goal is to repeat the given string 'str' as many times as 'num' says.
