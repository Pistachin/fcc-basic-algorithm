var reverseString = function (str) {
  var reverseStr = str
  var arraiedStr = reverseStr.split('')
    .reverse()
    .join('')
  return arraiedStr
}

console.log(reverseString('Una string es una texto.'))
