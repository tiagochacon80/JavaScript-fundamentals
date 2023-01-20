let frutas = ['Banana', 'Laranja', 'Maça', 'Pêra'];

//1 - Filtrando a quantidade de caractares, como essa funcao gera um novo array eh preciso coloca-la dentro de uma funcao
let bigFrutas = frutas.filter((item) => {
    return item.length > 7;
});

//2 - funcao every() vai contar a quantidade de caractere dentro da posicao do array, mas todos elementos do array tem que satisfazer a condicao
let ok = frutas.every((value) => {
    return value.length > 3; //se todos os elementos do array tem mais que 3 caracteres
})

/* 3 - some(), basta um elemento satisfazer a condicao

let ok = frutas.every((value) => {
    return value.length > 3; //se todos os elementos do array tem mais que 3 caracteres
}) 
*/

/* 4 - funcao que procura uma determinada string
let frutas = ['Banana', 'Laranja', 'Maça', 'Pêra'];

if (frutas.includes(''Uva)) {
    console.log('Tem uva sim');
} else {
    console.log('Nao tem uva...')
}
*/


console.log(bigFrutas);