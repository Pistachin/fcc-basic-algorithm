/* This challenge asks you to eliminate all falsy values from a given array. Falsy values are 'false', 'null', 'undefined', '' (empty string), 0 and 'NaN' (all of this previous, without the singlequotes, exception for the empty string). */

var bouncer = function (arr) {
  var condition = function (control) {
    return control !== false && control !== '' && control !== 0 && control !== undefined && control !== null
  }
  var eliminateNaN = arr.map(function (n) {
    var finderOfNaN = Number.isNaN(n)
    var indexOfNaN = arr.indexOf(n)
    if (finderOfNaN === true) {
      return ''
    } else if (finderOfNaN === false) {
      return arr[indexOfNaN]
    }
  })
  var filtered = eliminateNaN.filter(condition)
  return filtered
}

console.log(bouncer([false, 'potato', null, 0, NaN, undefined, '', 5, 'this is a test']))
