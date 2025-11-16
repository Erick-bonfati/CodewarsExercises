// Após um trimestre difícil no escritório, você decide descansar e tirar férias. Então, você reserva um voo para você e sua namorada e tenta deixar toda a confusão para trás.

// Você precisará de um carro alugado para se locomover durante suas férias. O gerente da locadora de veículos pode lhe oferecer boas condições.

// Cada dia de aluguel do carro custa US$ 40. Se você alugar o carro por 7 dias ou mais, ganha um desconto de US$ 50 no total. Alternativamente, se você alugar o carro por 3 dias ou mais, ganha um desconto de US$ 20 no total.

// Escreva um código que retorne o valor total para diferentes dias (d).

function rentalCarCost(d) {
  let priceDay = 40;
  let total = 0;

  if(d >= 7) {
    total = priceDay * d - 50;
  } else if(d >= 3) {
    total = priceDay * d - 20;
  } else {
    total = priceDay * d;
  }

  return total;
}

console.log(rentalCarCost(3))