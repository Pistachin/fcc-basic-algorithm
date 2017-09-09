
function slasher (arr, howMany) {
  var initialArray = arr
  var amount = howMany
  var i = 0
  while (i < amount) {
    initialArray.shift()
    i++
  }
  return arr
}

slasher([1, 2, 3], 2)

// El objetivo del algoritmo es tener un array que sea igual a 'arr' menos una cantidad de elementos definida por 'howMany', empezando el conteo de dichos elementos por la cabeza/head de la array. Es decir, el índice 0.
