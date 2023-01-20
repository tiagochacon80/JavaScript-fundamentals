let lista = ['Ovo', 'Farinha', 'Açucar', 'Leite'];
console.log(lista);

let res = lista;
//1 - Transforma um array é um string
let resToString = res.toString();
//2 - Gera uma string separado pelo simbolo dentro dos ()
let resJoint = res.join('-');
//3 - Retorna a posiçao do array procurado, nesse caso 'Leite'
let resIndexOf = res.indexOf('Leite')
/*4 - Altera o conteudo do proprio array, nesse caso remove o ultimo item
res.pop(); // ULTIMO
Remove o primeiro item do array
res.shift(); // PRIMEIRO */
//5 - Adiciona um novo item no array
res.push('Corante')
//6 - Alterando com os [], se tiver o item na posiçao ele altera se nao tiver o item ele adiciona
res[0] = 'Ovos'
res[4] = 'Agua'

console.log(resToString);
console.log(resJoint);
console.log(resIndexOf);
console.log(res);

