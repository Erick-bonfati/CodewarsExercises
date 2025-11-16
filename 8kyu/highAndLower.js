// Nesta pequena tarefa, você receberá uma sequência de números separados por espaços e deverá retornar o maior e o menor número.

// Exemplos
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notas
// Todos os números são válidos Int32, não é necessário validá-los.
// Haverá sempre pelo menos um número na sequência de entrada.
// A string de saída deve conter dois números separados por um único espaço, sendo o número de maior valor o primeiro.

function highAndLow(numbers){
  let newNums = numbers.split(" ");
  let menor = Math.min(...newNums)
  let maior = Math.max(...newNums)
  return maior + " " + menor
}

console.log(highAndLow("1 9 3 4 -5"))

// SOLUÇÃO SIMPLES

function highAndLow2(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow2("1 9 3 4 -5"))
