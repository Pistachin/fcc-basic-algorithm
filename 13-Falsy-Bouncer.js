
function bouncer(arr) {
  // First I have to declare a function that will be the filtering one.
  // Then I have to apply that filter to the first array.
  // The filter has to return everything that is not a Falsy value.
  // Falsy values are false, null, undefined, '', 0, NaN.
  var condition = function(control){
    return control !== false && control !== '' && control !== 0 && control !== undefined && control !== null;
  };
  var eliminateNaN = arr.map(function (n){
    var finderOfNaN = Number.isNaN(n);
    var indexOfNaN = arr.indexOf(n);
    if (finderOfNaN === true) {
      return '';
    } else if (finderOfNaN === false) {
      return arr[indexOfNaN];
    }
  });
  var filtered = eliminateNaN.filter(condition);
  return filtered;
}

console.log(bouncer([false, 'potato', null, 0, NaN, undefined, "", 5, 'this is a test']));
