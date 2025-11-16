// Se você não consegue dormir, simplesmente conte carneirinhos!

// Tarefa:
// Dado um número inteiro não negativo, 3por exemplo, retorne uma string com um murmúrio: "1 sheep...2 sheep...3 sheep...". A entrada será sempre válida, ou seja, não serão aceitos números inteiros negativos.

var countSheep = function (num){
  let counter = []
  for(let i = 1; i <= num; i++) {
    counter.push(`${i} sheep...`)
  }

  return counter.toString().replace(/,/g, "")
}

console.log(countSheep(10))