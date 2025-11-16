// Os trolls estão atacando a sua seção de comentários!

// Uma forma comum de lidar com essa situação é remover todas as vogais dos comentários dos trolls, neutralizando a ameaça.

// Sua tarefa é escrever uma função que receba uma string e retorne uma nova string sem as vogais.

// Por exemplo, a frase "This website is for losers LOL!" se tornaria "Ths wbst s fr lsrs LL!".

// Nota: para este kata, ynão é considerada uma vogal.

function disemvowel(str) {
  const vowels = "AEIOUaeiou"
  let newArr = "";

  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      continue;
    } else { 
      newArr += str[i]
    }
  }
  return newArr;
}

console.log(disemvowel("Ola, este e um grande dia para comemorar"))

// MELHOR SOLUÇÃO

function disemvowel1(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel1("Ola, este e um grande dia para comemorar"))
