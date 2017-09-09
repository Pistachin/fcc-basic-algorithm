var palindrome = function (str) {
  var originalStr = str
  var lowerCase = originalStr.toLowerCase().replace(/\W+/g, '').replace(/_/g, '')
  var finalStr = lowerCase.split('').reverse().join('')
  if (lowerCase === finalStr) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('My age is 0, 0 si ega ym.'))
