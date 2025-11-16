// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  let numX = "";
  for(let i = 0; i < x.length; i++) {
    if(x[i] >= "5") {
      numX += x[i] = 1;
    } else {
      numX += x[i] = 0;
    }
  }

  return numX;
}

 console.log(fakeBin("624389142"));


 //MELHOR SOLUÇÃO

 function fakeBin1(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}