/*function somar(x, y) {
    return x + y;
}*/

//Forma normal
/*
const somar = (x, y) => {
    return x + y;
}
*/

//Outra forma de fazer a arrow function
const somar = (x, y) => x + y;


console.log(somar(10, 5));

//Uma forma mais simplificada quando temos apenas um atributo/variavel
const nome = sob => "Tiago " + sob;
console.log(nome("Chacon"));