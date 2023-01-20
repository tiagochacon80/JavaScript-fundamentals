//Estraindo informaçoes de uma string
let nome = 'Tiago Celani Chacon'

//Serve para retornar a posicao inicial que voce deseja, até a posicao final que voce desejar
let resultadoSlice = nome.slice(-15);
//Funciona parecido com o slice(), com a diferença que o slice pode fazer uma buscas de tras para frente colocando o numero no negativo slice(-4)
let resultadoSubstring = nome.substring(3, 8);
//Parecido com os dois primeiros, contudo no segundo parametro sendo a quantidade de caracteres à ser pego e ele funciona com valores negativos
//Ex: pegar a partir da posiçao 8 e 6 caractres no total
let resultadoSubstr = nome.substr(8, 6);

console.log(resultadoSlice);
console.log(resultadoSubstring);
console.log(resultadoSubstr);