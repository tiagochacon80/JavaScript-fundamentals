let n = 10;
let decimal = 10.6587424548;
let string = '25';

let res = n;
//Transforma o numero em um string
let resToString = n.toString();
//Formataçao das casas decimais
let restoFixed = decimal.toFixed(3);
//Transformando string em numero o parseInt() vai cortar os numeros depois da virgula, existe o parseFloat() que deixe os numeros em decimais
let resParseInt = parseInt(string);


console.log(res);
console.log(resToString + 5);
console.log(`CAD$ ${restoFixed}`);
console.log(resParseInt);