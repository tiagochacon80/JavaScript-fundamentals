let lista = [45, 4, 9, 16, 25];
let lista2 = [];

/*
for(let i in lista) {
    lista2.push(lista[i] * 2);
}
*/

lista2 = lista.map(function(item) {
    return item * 2;
});


let res = lista2;

console.log(res);