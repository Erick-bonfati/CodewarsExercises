// O relógio mostra has horas, mos minutos e sos segundos após a meia-noite.

// Sua tarefa é escrever uma função que retorne o tempo decorrido desde a meia-noite em milissegundos.

// Exemplo:
// h = 0
// m = 1
// s = 1

// result = 61000
// Restrições de entrada:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

const past = (h, m, s) => { return (h * 60 * 60000) + (m * 60000) + (s * 1000) };

console.log(past("1","1","1"))