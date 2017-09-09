
function mutation(arr) {
  var firstElm = arr[0].toLowerCase();
  var secondElm = arr[1].toLowerCase();
  var j = 0;
  var secondCheck = '';
  while (j < secondElm.length) {
    var firstCheck = firstElm.indexOf(secondElm[j]);
    if (firstCheck !== -1 && secondCheck !== secondElm) {
      secondCheck = secondCheck + secondElm[j];
      j++;
    } else {
      j = secondElm.length + 1;
    }
  }
  return secondCheck === secondElm
}

console.log(mutation(["hEllo", "HEeeeeeeLLO"]));

// El objetivo del algoritmo es comprobar sj la primer string contiene todas las letras de la segunda string. Esto valora la posibilidad de que la primer string contenga más letras que la segunda y no tiene en cuenta las mayúsculas, por lo que 'POTATOHJSAZ' y 'potato' deberían devolver 'true'. Por lo visto, segun los ejemplos dados por FCC la repetición de letras no afecta. Por lo que 'Mary' y 'Aarmy' debería devolver 'true' en vez de 'false'.
