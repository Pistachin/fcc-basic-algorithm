function confirmEnding (str, target) {
  var initialStr = str
  var controlStr = target
  var strLength = initialStr.length
  var tgtLength = controlStr.length
  var startingIndex = strLength - tgtLength
  var subStr1 = initialStr.substr(startingIndex)
  if (subStr1 === controlStr) {
    return true
  } else {
    return false
  }
}

confirmEnding('Bastian', 'n')

// El objetivo es confirmar que el argumento dado como target sea igual a las últimas letras del argumento str. Indistintamente de la longitud de target. Teniendo en cuenta que str podría ser una frase completa, y que target podría ser la última letra de la frase, la última palabra, una parte de la última palabra, o una parte de la frase cortando a mitad de palabra.
