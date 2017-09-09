var titleCase = function (str) {
  var originalStr = str
  var firstArray = originalStr.split(' ')
  var secondArray = firstArray.map(function (val) {
    return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase()
  })
  var finalStr = secondArray.join(' ')
  return finalStr
}

console.log(titleCase("I'm a little tea pot"))
