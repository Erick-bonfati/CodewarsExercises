// Crie um programa que filtre uma lista de strings e retorne uma lista contendo apenas o nome de seus amigos.

// Se um nome tiver exatamente 4 letras, você pode ter certeza de que é um amigo seu! Caso contrário, pode ter certeza de que não é...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// As sequências de entrada conterão apenas letras.
// Observação: mantenha a ordem original dos nomes na saída.

function friend(friends){
  let amigos = [];
  for(let i = 0; i < friends.length; i++) {
    if(friends[i].length === 4) {
      amigos.push(friends[i])
    }
  }

  return amigos;
}

const friends = ["Ryan", "Kieran", "Jason", "Yous", "123", "4"]

console.log(friend(friends))