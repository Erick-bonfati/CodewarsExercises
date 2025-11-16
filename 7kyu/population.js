// Em uma pequena cidade, a população é p0 = 1000de no início do ano. A população aumenta regularmente em 2 percentpor ano e, além disso, 50novos habitantes chegam à cidade anualmente. Em quantos anos a cidade precisa para que sua população seja maior ou igual a p = 1200habitantes?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// De forma mais geral, dados os seguintes parâmetros:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// A função nb_yeardeve retornar no número de anos inteiros necessários para obter uma população maior ou igual a p.

// aug é um número inteiro, percent é um número decimal positivo ou nulo, p0 e p são números inteiros positivos (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Observação:
// Não se esqueça de converter o parâmetro percentual para porcentagem no corpo da sua função: se o parâmetro percentual for 2, você precisa convertê-lo para 0,02.

// Não existem frações de pessoas. No final de cada ano, a contagem da população é um número inteiro: 252.8o número de pessoas é arredondado para baixo, resultando em 252pessoas.

function nbYear(p0, percent, aug, p) {
  let novaPopulacao;
  let populacaoAtual = p0;
  let contaAno = 0;
    while(populacaoAtual < p) {
      novaPopulacao = Math.floor(populacaoAtual + (populacaoAtual * percent / 100) + aug)
      populacaoAtual = novaPopulacao;
      contaAno++;
      continue
    }

  return contaAno;
}

console.log(nbYear(1000, 2, 50, 1200))