function chunkArrayInGroups (arr, size) {
  var initialArray = arr
  var i = 1
  var firstArray = [initialArray.slice(0, size)]
  while (i < initialArray.length / size) {
    var start = i * size
    var length = start + size
    var secondArray = initialArray.slice(start, length)
    firstArray.push(secondArray)
    i++
  }
  return firstArray
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f'], 2))

// El objetivo del ejercicio es dividir la array inicial 'arr' en sub-arrays del tamaño definido por 'size' y que todo esto se encuentre dentro de un array. Por lo que por el ejemplo (['a', 'b', 'c', 'd'], 2) resultaría como [['a', 'b'], ['c', 'd']]
