//Array cores
let cores = [
    {nome: 'preto', qt: 10 },
    {nome: 'Azul', qt: 5 },
    {nome: 'vermelho', qt: 15 }
];

/*
for (let n = 0; n < cores.length; n++) {
    console.log(cores[n].nome);
}*/

//Outra forma de fazer o for
for (let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
}

/*Outra forma
for (let cor of cores) {
    console.log(cor.nome + ' ' + cor.qt);
} */

console.log(cores);