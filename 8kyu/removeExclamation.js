// Escreva uma função chamada RemoveExclamationMarks que remova todos os pontos de exclamação de uma determinada string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, ""); //regex que substitui todas ocorrencias
}

console.log(removeExclamationMarks("QHCelfvQdR!xDQKtGkYUs uLyirvVQgw!ZujHxgEPMS"))