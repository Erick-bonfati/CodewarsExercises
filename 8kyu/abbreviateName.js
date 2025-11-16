// Escreva uma função para converter um nome em iniciais. Este kata aceita estritamente duas palavras com um espaço entre elas.

// O resultado deve ser duas letras maiúsculas separadas por um ponto.

// Deverá ficar assim:

// Sam Harris=>S.H

// patrick feeney=>P.F

function abbrevName(name){
  name = name.split(" ");
  let first = name[0][0]
  let last = name[1][0]
  return first.toUpperCase() + "." + last.toUpperCase()
}

console.log(abbrevName("Erick Bonfati"))