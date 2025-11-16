// Diário de notas
// Complete a função para que ela calcule a média das três notas passadas como parâmetro e retorne o valor da letra correspondente a essa nota.

// Pontuação Numérica	Nota por letra
// 90 <= pontuação <= 100	'UM'
// 80 <= pontuação < 90	'B'
// 70 <= pontuação < 80	'C'
// 60 <= pontuação < 70	'D'
// 0 <= pontuação < 60	'F'
// Os valores testados estão todos entre 0 e 100. Não há necessidade de verificar valores negativos ou valores maiores que 100.

function getGrade (s1, s2, s3) {
  let sumNotes = (s1 + s2 + s3) / 3;
  if(sumNotes >= 90 && sumNotes <= 100) {
    return "A"
  } else if(sumNotes >= 80 && sumNotes < 90) {
    return "B"
  } else if(sumNotes >= 70 && sumNotes < 80) {
    return "C"
  } else if(sumNotes >= 60 && sumNotes < 70) {
    return "D" 
  } else {
    return "F"
  }
    
}

console.log(getGrade(60, 70, 40));

//MELHOR SOLUÇÃO

function getGrade1 (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

console.log(getGrade1(60, 70, 40));
