let nome = 'Tiago Celani Chacon'
//Como o nome ja diz, ele vai procurar por 'Celani' e retorna 'Brown' no lugar de 'Celani'
let resultado = nome.replace('Celani', 'Brown');
//Colocar a string toda maiuscula
let resultadoUpperCase = nome.toUpperCase(); 
//Coloca a string toda minusculas
let resultadoLowerCase = nome.toLowerCase();
//Serve para remover os espaços em brancos, apenas os espeços nas bordas e nao no meio
let nomeTrim = '          Tiago          ';
let resultadTrim = nomeTrim.trim();
//Quando quer saber qual o caractere esta em uma posicao
let resultaoChatAt = nome.charAt(6);
//Se quiser saber qual caractere por []
let resultadoColchetes = nome[2];
//De uma string ele vai gerar um array
let resultadoSplit = nome.split(' ');

console.log(resultado);
console.log(resultadoUpperCase);
console.log(resultadoLowerCase);
console.log(resultadTrim);
console.log(resultaoChatAt);
console.log(resultadoColchetes);
console.log(resultadoSplit);