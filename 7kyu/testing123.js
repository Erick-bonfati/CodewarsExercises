// Sua equipe está desenvolvendo um novo e sofisticado editor de texto, e você foi encarregado de implementar a numeração de linhas.

// Escreva uma função que receba uma lista de strings e retorne cada linha precedida pelo número correto.

// A numeração começa em 1. O formato é n: string. Observe os dois pontos e o espaço entre eles.

// Exemplos: (Entrada --> Saída)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array) {
  let orderNums = [];

  for(let i = 0; i < array.length; i++) {
    orderNums.push(`${i + 1}: ${array[i]}`)
  }

  return orderNums;
}

console.log(number(["a", "b", "c"]))