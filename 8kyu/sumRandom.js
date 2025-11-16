// Dado um array de inteiros representados como strings e números, retorne a soma dos valores do array como se todos fossem números.

// Retorne sua resposta como um número.

function sumMix(x){
  let soma = 0;

  for(let i = 0; i < x.length; i++) {
    soma += Number(x[i])
  }

  return soma;
}

console.log(sumMix([9, 3, '7', '3']));